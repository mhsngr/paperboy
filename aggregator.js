const Feed = require('./models/Feed');
const Item = require('./models/Item');
const User = require('./models/User');
const Parser = require('rss-parser');

const parser = new Parser();

const aggregateFeeds = (interval) => {
  setInterval(fetchFeeds, interval)
}

const fetchFeeds = async () => {
  try {
    console.log('Updating feeds:')
    const feeds = await Feed.find();
    for (let feed of feeds) {
      let count = 0;
      const parsedFeed = await parser.parseURL(feed.feedUrl)
      for (let item of parsedFeed.items) {
        const existingItem = await Item.findOne({ title: item.title, link: item.link, isoDate: item.isoDate, feed: feed._id });
        if (!existingItem) {
          const newItem = await Item.create({ ...item, feed: feed._id });
          await Feed.findByIdAndUpdate(feed._id, { $push: { feedItems: { $each: [newItem._id], $position: 0 } } });
          await User.updateMany({ feeds: feed._id }, { $push: { unread: { $each: [newItem._id], $position: 0 } } });
          count++;
        }
      }
      console.log(feed.feedUrl, feed.title, count, 'new items');
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = aggregateFeeds;