const Feed = require('./models/Feed');
const Item = require('./models/Item');
const Parser = require('rss-parser');

const parser = new Parser();

// const updateFeeds = (interval) => {
//   setInterval(() => {
//     Feed.find()
//       .then(feeds => {
//         feeds.forEach(feed => {
//           parser.parseURL(feed.url)
//             .then(parsedFeed => {
//               const newItems = parsedFeed.items.filter(item => new Date(item.isoDate) > feed.updatedAt);
//               Item.insertMany(newItems.map(item => ({...item, feed: feed._id})))
//                 .then(insertedItems => {
//                   const itemIds = insertedItems.map(item => item._id);
//                   Feed.findByIdAndUpdate(feed._id, { $push: { items: { $each: itemIds, $position: 0 } } }, { new: true })
//                     .then(updatedFeed => {
//                       console.log('updated: ', updatedFeed.title);
//                     })
//                     .catch(err => {
//                       console.log(err);
//                     })
//                 })
//                 .catch(err => {
//                   rconsole.log(err);
//                 })
//             })
//             .catch(err => {
//               console.log(err);
//             })
//         })
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }, interval)
// }

const aggregateFeeds = (interval) => {
  setInterval(fetchFeeds, interval)
}

// const fetchFeeds = () => {
//   Feed.find()
//     .then(feeds => {
//       feeds.forEach(feed => {
//         parser.parseURL(feed.feedUrl)
//           .then(parsedFeed => {
//             parsedFeed.items.forEach(item => {
//               Item.findOne({ title: item.title, link: item.link, isoDate: item.isoDate, feed: feed._id })
//                 .then(existingItem => {
//                   if (!existingItem) {
//                     Item.create({ ...item, feed: feed._id })
//                       .then(newItem => {
//                         Feed.findByIdAndUpdate(feed._id, { $push: { feedItems: { $each: [newItem._id], $position: 0 } } }, { new: true })
//                           .then(updatedFeed => {
//                             console.log(newItem, 'added to', updatedFeed.title);
//                           })
//                           .catch(err => {
//                             console.log(err);
//                           })
//                       })
//                       .catch(err => {
//                         console.log(err);
//                       })
//                   }
//                 })
//             });
//           })
//           .catch(err => {
//             console.log(err);
//           })
//       })
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }

const fetchFeeds = async () => {
  try {
    const feeds = await Feed.find();
    for (let feed of feeds) {
      await console.log('updating', feed.title);
      const parsedFeed = await parser.parseURL(feed.feedUrl)
      for (let item of parsedFeed.items) {
        const existingItem = await Item.findOne({ title: item.title, link: item.link, isoDate: item.isoDate, feed: feed._id });
        if (!existingItem) {
          const newItem = await Item.create({ ...item, feed: feed._id });
          const updatedFeed = await Feed.findByIdAndUpdate(feed._id, { $push: { feedItems: { $each: [newItem._id], $position: 0 } } }, { new: true });
          await console.log(newItem.title, 'added to', updatedFeed.title)
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
}

// const fetchFeeds = async () => {
//   try {
//     const feeds = await Feed.find();
//   } catch (err) {
//     console.log(err);
//   }
//   for (let feed of feeds) {
//     await console.log('updating', feed.title);
//     try {
//       const parsedFeed = await parser.parseURL(feed.feedUrl)
//     } catch (err) {
//       console.log(err);
//     }
//     for (let item of parsedFeed.items) {
//       try {
//         const existingItem = await Item.findOne({ title: item.title, link: item.link, isoDate: item.isoDate, feed: feed._id });
//       } catch (err) {
//         console.log(err);
//       }
//       if (!existingItem) {
//         try {
//           const newItem = await Item.create({ ...item, feed: feed._id });
//         } catch (err) {
//           console.log(err);
//         }
//         try {
//           const updatedFeed = await Feed.findByIdAndUpdate(feed._id, { $push: { feedItems: { $each: [newItem._id], $position: 0 } } }, { new: true });
//         } catch (err) {
//           console.log(err);
//         }
//         await console.log(newItem, 'added to', updatedFeed.title)
//       }
//     }
//   }
// }

module.exports = aggregateFeeds;