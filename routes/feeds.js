const router = require("express").Router();
const Feed = require('../models/Feed');
const Item = require('../models/Item');
const User = require('../models/User');
const Parser = require('rss-parser');

const parser = new Parser();

router.post("/", (req, res) => {
  Feed.findOne({ feedUrl: req.body.url })
    .then(existingFeed => {
      if (existingFeed) {
        User.findOne({ _id: req.user._id, feeds: existingFeed._id })
          .then(user => {
            if (user) {
              res.status(400).json({ message: 'You already follow this feed' })
            }
            else {
              User.findByIdAndUpdate(req.user._id, { $push: { feeds: existingFeed._id } })
                .then(() => {
                  updateFeed(existingFeed._id)
                    .then(updatedFeed => {
                      res.status(201).json(updatedFeed)
                    })
                    .catch(err => {
                      res.json(err);
                    })
                })
                .catch(err => {
                  res.json(err);
                })
            }
          })
          .catch(err => {
            res.json(err);
          })
      } else {
        parser.parseURL(req.body.url)
          .then(parsedFeed => {
            const feedUrl = parsedFeed.feedUrl || req.body.url;
            Feed.create({ ...parsedFeed, feedUrl: feedUrl })
            .then(createdFeed => {
              User.findByIdAndUpdate(req.user._id, { $push: { feeds: createdFeed._id } })
                .then(() => {
                  updateFeed(createdFeed._id)
                    .then(updatedFeed => {
                      res.status(201).json(updatedFeed)
                    })
                    .catch(err => {
                      res.json(err);
                    })
                })
                .catch(err => {
                  res.json(err);
                })
            })
            .catch(err => {
              res.json(err);
            })
          })
          .catch(err => {
            res.status(400).json({ err, message: 'Invalid feed URL' })
          })
      }
    })
});

router.get('/', (req, res) => {
  if (req.query.id === 'starred' && req.query.unread === 'true') {
    User.findById(req.user._id)
      .then(user => {
        Item.find({ $and: [ { _id: [ ...user.unread ] }, { _id: [ ...user.starred ] } ] })
          .select('_id')
          .sort({ isoDate: -1 })
          .then(unreadItems => {
            const ids = unreadItems.map(item => item._id);
            res.status(200).json(ids);
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'starred' && req.query.limit && req.query.skip && req.query.q) {
    User.findById(req.user._id)
      .then(user => {
        Item.find({ $and: [ { _id: [ ...user.starred ] }, { $text : { $search : req.query.q } } ] })
        // search using regex
        // Item.find({ $and: [ { feed: req.query.id }, { title : { $regex : req.query.q, $options: 'i'  } } ] })
          .populate({
            path: 'feed',
            select: 'title'
          })
          .sort({ isoDate: -1 })
          .skip(+req.query.skip)
          .limit(+req.query.limit)
          .then(items => {
            res.status(200).json(items);
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'starred' && req.query.limit && req.query.skip){
    User.findById(req.user._id)
      .then(user => {
        Item.find({ _id: [ ...user.starred ] })
          .populate({
            path: 'feed',
            select: 'title'
          })
          .sort({ isoDate: -1 })
          .skip(+req.query.skip)
          .limit(+req.query.limit)
          .then(items => {
            res.status(200).json(items);
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'starred' && req.query.limit){
    User.findById(req.user._id)
      .then(user => {
        Item.find({ _id: [ ...user.starred ] })
          .populate({
            path: 'feed',
            select: 'title'
          })
          .sort({ isoDate: -1 })
          .limit(+req.query.limit)
          .then(items => {
            res.status(200).json(items);
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'starred' && req.query.q) {
    User.findById(req.user._id)
      .then(user => {
        Item.countDocuments({ $and: [ { _id: [ ...user.starred ] }, { $text : { $search : req.query.q } } ] })
          .then(count => {
            res.status(200).json({ feedItems: count });
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'starred') {
    User.findById(req.user._id)
      .then(user => {
        Item.countDocuments({ _id: [ ...user.starred ] })
          .then(count => {
            res.status(200).json({feedItems: count });
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'starred' && req.query.limit && req.query.skip && req.query.q) {
    User.findById(req.user._id)
      .then(user => {
        Item.find({ $and: [ { _id: [ ...user.starred ] }, { $text : { $search : req.query.q } } ] })
        // search using regex
        // Item.find({ $and: [ { feed: req.query.id }, { title : { $regex : req.query.q, $options: 'i'  } } ] })
          .populate({
            path: 'feed',
            select: 'title'
          })
          .sort({ isoDate: -1 })
          .skip(+req.query.skip)
          .limit(+req.query.limit)
          .then(items => {
            res.status(200).json(items);
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'starred' && req.query.limit && req.query.skip){
    User.findById(req.user._id)
      .then(user => {
        Item.find({ _id: [ ...user.starred ] })
          .populate({
            path: 'feed',
            select: 'title'
          })
          .sort({ isoDate: -1 })
          .skip(+req.query.skip)
          .limit(+req.query.limit)
          .then(items => {
            res.status(200).json(items);
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'starred' && req.query.limit){
    User.findById(req.user._id)
      .then(user => {
        Item.find({ _id: [ ...user.starred ] })
          .populate({
            path: 'feed',
            select: 'title'
          })
          .sort({ isoDate: -1 })
          .limit(+req.query.limit)
          .then(items => {
            res.status(200).json(items);
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'starred' && req.query.q) {
    User.findById(req.user._id)
      .then(user => {
        Item.countDocuments({ $and: [ { _id: [ ...user.starred ] }, { $text : { $search : req.query.q } } ] })
          .then(count => {
            res.status(200).json({ feedItems: count });
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'starred') {
    User.findById(req.user._id)
      .then(user => {
        Item.countDocuments({ _id: [ ...user.starred ] })
          .then(count => {
            res.status(200).json({feedItems: count });
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'all' && req.query.unread === 'true') {
  User.findById(req.user._id)
    .then(user => {
      Item.find({ $and: [ { feed: [ ...user.feeds ] }, { _id: [ ...user.unread ] } ] })
        .select('_id')
        .sort({ isoDate: -1 })
        .then(unreadItems => {
          const ids = unreadItems.map(item => item._id);
          res.status(200).json(ids);
        })
        .catch(err => {
          res.json(err);
        })
    })
    .catch(err => {
      res.json(err);
    })
  } else if (req.query.id === 'all' && req.query.limit && req.query.skip && req.query.q) {
    User.findById(req.user._id)
      .then(user => {
        Item.find({ $and: [ { feed: [ ...user.feeds ] }, { $text : { $search : req.query.q } } ] })
        // search using regex
        // Item.find({ $and: [ { feed: req.query.id }, { title : { $regex : req.query.q, $options: 'i'  } } ] })
          .populate({
            path: 'feed',
            select: 'title'
          })
          .sort({ isoDate: -1 })
          .skip(+req.query.skip)
          .limit(+req.query.limit)
          .then(items => {
            res.status(200).json(items);
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'all' && req.query.limit && req.query.skip){
    User.findById(req.user._id)
      .then(user => {
        Item.find({ feed: [ ...user.feeds ] })
          .populate({
            path: 'feed',
            select: 'title'
          })
          .sort({ isoDate: -1 })
          .skip(+req.query.skip)
          .limit(+req.query.limit)
          .then(items => {
            res.status(200).json(items);
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'all' && req.query.limit){
    User.findById(req.user._id)
      .then(user => {
        Item.find({ feed: [ ...user.feeds ] })
          .populate({
            path: 'feed',
            select: 'title'
          })
          .sort({ isoDate: -1 })
          .limit(+req.query.limit)
          .then(items => {
            res.status(200).json(items);
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'all' && req.query.q) {
    User.findById(req.user._id)
      .then(user => {
        Item.countDocuments({ $and: [ { feed: [ ...user.feeds ] }, { $text : { $search : req.query.q } } ] })
          .then(count => {
            res.status(200).json({ feedItems: count });
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'all') {
    User.findById(req.user._id)
      .then(user => {
        Item.countDocuments({ feed: [ ...user.feeds ] })
          .then(count => {
            res.status(200).json({feedItems: count });
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })

  } else if (req.query.id && req.query.unread === 'true') {
    User.findById(req.user._id)
      .then(user => {
        Item.find({ $and: [ { _id: [ ...user.unread ] }, { feed: req.query.id } ] })
          .select('_id')
          .sort({ isoDate: -1 })
          .then(unreadItems => {
            const ids = unreadItems.map(item => item._id);
            res.status(200).json(ids);
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id && req.query.limit && req.query.skip && req.query.q) {
    Item.find({ $and: [ { feed: req.query.id }, { $text : { $search : req.query.q } } ] })
    // search using regex
    // Item.find({ $and: [ { feed: req.query.id }, { title : { $regex : req.query.q, $options: 'i'  } } ] })
      .sort({ isoDate: -1 })
      .skip(+req.query.skip)
      .limit(+req.query.limit)
      .then(items => {
        res.status(200).json(items);
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id && req.query.limit && req.query.skip){
    Item.find({ feed: req.query.id })
      .sort({ isoDate: -1 })
      .skip(+req.query.skip)
      .limit(+req.query.limit)
      .then(items => {
        res.status(200).json(items);
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id && req.query.limit){
    Item.find({ feed: req.query.id })
      .sort({ isoDate: -1 })
      .limit(+req.query.limit)
      .then(items => {
        res.status(200).json(items);
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id && req.query.q) {
    Item.countDocuments({ $and: [ { feed: req.query.id }, { $text : { $search : req.query.q } } ] })
      .then(count => {
        Feed.findById(req.query.id)
        .then(feed => {
          const { _id, feedUrl, title, description, link, category } = feed;
          res.status(200).json({ _id, feedUrl, title, description, link, category, feedItems: count });
        })
        .catch(err => {
          res.json(err);
        })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id) {
    updateFeed(req.query.id)
      .then(feed => {
        const { _id, feedUrl, title, description, link, category } = feed;
        res.status(200).json({ _id, feedUrl, title, description, link, category, feedItems: feed.feedItems.length });
      })
      .catch(err => {
        res.json(err);
      })
  } else {
    User.findById(req.user._id)
      .select('feeds')
      .populate({
        path: 'feeds',
        select: '-feedItems'
      })
      .then(user => {
        user.feeds.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
          return 0;
        })
        res.status(200).json(user.feeds);
      })
      .catch(err => {
        res.json(err);
      })
  }
});

router.put('/', (req, res) => {
  if (req.query.id === 'starred' && req.query.unread === 'false') {
    User.findById(req.user._id)
      .then(user => {
        Item.find({ $and: [ { _id: [ ...user.unread ] }, { _id: [ ...user.starred ] } ] })
          .select('_id')
          .then(readItems => {
            User.findByIdAndUpdate(req.user._id, { $pullAll: { unread: readItems } }, { new: true })
              .then(user => {
                Item.find({ $and: [ { _id: [ ...user.unread ] }, { _id: [ ...user.starred ] } ] })
                .then(unreadItems => {
                  const ids = unreadItems.map(item => item._id);
                  res.status(200).json(ids);
                })
                .catch(err => {
                  res.json(err);
                })
              })
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id === 'all' && req.query.unread === 'false') {
    User.findById(req.user._id)
      .then(user => {
        Item.find({ $and: [ { _id: [ ...user.unread ] }, { feed: [ ...user.feeds ] } ] })
          .select('_id')
          .then(readItems => {
            User.findByIdAndUpdate(req.user._id, { $pullAll: { unread: readItems } }, { new: true })
              .then(user => {
                Item.find({ $and: [ { _id: [ ...user.unread ] }, { feed: [ ...user.feeds ] } ] })
                .then(unreadItems => {
                  const ids = unreadItems.map(item => item._id);
                  res.status(200).json(ids);
                })
                .catch(err => {
                  res.json(err);
                })
              })
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  } else if (req.query.id && req.query.unread === 'false') {
    User.findById(req.user._id)
      .then(user => {
        Item.find({ $and: [ { _id: [ ...user.unread ] }, { feed: req.query.id } ] })
          .select('_id')
          .then(readItems => {
            User.findByIdAndUpdate(req.user._id, { $pullAll: { unread: readItems } }, { new: true })
              .then(user => {
                Item.find({ $and: [ { _id: [ ...user.unread ] }, { feed: req.query.id } ] })
                .then(unreadItems => {
                  const ids = unreadItems.map(item => item._id);
                  res.status(200).json(ids);
                })
                .catch(err => {
                  res.json(err);
                })
              })
          })
          .catch(err => {
            res.json(err);
          })
      })
      .catch(err => {
        res.json(err);
      })
  }
});

router.get('/all', (req, res) => {
  Feed.find()
    .select('-feedItems')
    .sort('title')
    .then(feeds => {
      res.status(200).json(feeds);
    })
    .catch(err => {
      res.json(err);
    })
});

router.get('/starred', (req, res) => {
  User.findById(req.user._id)
    .then(user => {
      res.status(200).json(user.starred);
    })
    .catch(err => {
      res.json(err);
    })
});

router.delete('/', (req, res) => {
  User.findByIdAndUpdate(req.user._id, { $pull: { feeds: req.query.id } }, { new: true })
    .select('feeds')
    .populate({
      path: 'feeds',
      select: '-feedItems'
    })
    .then(user => {
      user.feeds.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      })
      res.status(200).json(user.feeds);
    })
    .catch(err => {
      res.json(err);
    })
})

router.put('/item/:id', (req, res) => {
  if (req.body.starred === true) {
    User.find({ $and: [ { _id: req.user._id }, { starred: req.params.id } ] })
    .then(user => {
      if (user.length > 0) {
        res.status(400).json({ message: 'Already starred' });
      }
      else {
        User.findByIdAndUpdate(req.user._id, { $push: { starred: req.params.id } }, { new: true })
        .then(user => {
          Item.find({ _id: [ ...user.starred ] })
          .then(starredItems => {
            const ids = starredItems.map(item => item._id);
            res.status(200).json(ids);
          })
          .catch(err => {
            res.json(err);
          })
        })
        .catch(err => {
          res.json(err);
        })
      }
    })
    .catch(err => {
      res.json(err);
    })
  } else if (req.body.starred === false) {
    User.findByIdAndUpdate(req.user._id, { $pull: { starred: req.params.id } }, { new: true })
    .then(user => {
      Item.find({ _id: [ ...user.starred ] })
      .then(starredItems => {
        const ids = starredItems.map(item => item._id);
        res.status(200).json(ids);
      })
      .catch(err => {
        res.json(err);
      })
    })
    .catch(err => {
      res.json(err);
    })
  } else if (req.body.unread === true) {
    User.find( {$and: [{ _id: req.user._id }, { unread: req.params.id }]})
    .then(user => {
      if (user.length > 0) {
        res.status(400).json({ message: 'Already marked as unread' });
      }
      else {
        User.findByIdAndUpdate(req.user._id, { $push: { unread: req.params.id } }, { new: true })
        .then(user => {
          Item.find({ _id: [ ...user.unread ] })
          .then(readItems => {
            const ids = readItems.map(item => item._id);
            res.status(200).json(ids);
          })
          .catch(err => {
            res.json(err);
          })
        })
        .catch(err => {
          res.json(err);
        })
      }
    })
    .catch(err => {
      res.json(err);
    })
  } else if (req.body.unread === false) {
    User.findByIdAndUpdate(req.user._id, { $pull: { unread: req.params.id } }, { new: true })
    .then(user => {
      Item.find({ _id: [ ...user.unread ] })
      .then(readItems => {
        const ids = readItems.map(item => item._id);
        res.status(200).json(ids);
      })
      .catch(err => {
        res.json(err);
      })
    })
    .catch(err => {
      res.json(err);
    })
  }
});

const updateFeed = async (id) => {
  try {
    const feed = await Feed.findById(id);
    const parsedFeed = await parser.parseURL(feed.feedUrl)
    for (let item of parsedFeed.items) {
      const existingItem = await Item.findOne({ title: item.title, link: item.link, isoDate: item.isoDate, feed: feed._id });
      if (!existingItem) {
        const newItem = await Item.create({ ...item, feed: feed._id });
        await Feed.findByIdAndUpdate(feed._id, { $push: { feedItems: { $each: [newItem._id], $position: 0 } } });
        await User.updateMany({ feeds: feed._id }, { $push: { unread: { $each: [newItem._id], $position: 0 } } });
      }
    }
    const updatedFeed = await Feed.findById(id);
    return updatedFeed;
  } catch (err) {
    console.log(err);
    const feed = await Feed.findById(id);
    return feed;
  }
}

module.exports = router;