const Feed = require('./models/Feed');
const Item = require('./models/Item');
const Parser = require('rss-parser');

const parser = new Parser();

const updateFeeds = (interval) => {
  setInterval(() => {
    Feed.find()
      .then(feeds => {
        feeds.forEach(feed => {
          parser.parseURL(feed.url)
            .then(parsedFeed => {
              const newItems = parsedFeed.items.filter(item => new Date(item.isoDate) > feed.updatedAt);
              Item.insertMany(newItems.map(item => ({...item, feed: feed._id})))
                .then(insertedItems => {
                  const itemIds = insertedItems.map(item => item._id);
                  Feed.findByIdAndUpdate(feed._id, { $push: { items: { $each: itemIds, $position: 0 } } }, { new: true })
                    .then(updatedFeed => {
                      console.log('updated: ', updatedFeed.title);
                    })
                    .catch(err => {
                      console.log(err);
                    })
                })
                .catch(err => {
                  rconsole.log(err);
                })
            })
            .catch(err => {
              console.log(err);
            })
        })
      })
      .catch(err => {
        console.log(err);
      })
  }, interval)
}

module.exports = updateFeeds;