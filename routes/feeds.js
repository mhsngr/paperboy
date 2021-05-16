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
              return res.status(400).json({ message: 'Feed already exists' })
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
            res.json(err);
          })
      }
    })
});

router.get('/', (req, res) => {
  User.findById(req.user._id)
    .populate('feeds')
    .then(user => {
       res.status(200).json(user.feeds)
    })
    .catch(err => {
      res.json(err);
    })
});

router.get('/all', (req, res) => {
  Feed.find()
    .then(feeds => {
       res.status(200).json(feeds)
    })
    .catch(err => {
      res.json(err);
    })
});

router.get('/starred', (req, res) => {
  User.findById(req.user._id)
    .then(user => {
      console.log(user.starred);
      Item.find({ _id: [ ...user.starred ] })
          .then(starredItems => {
            console.log(starredItems);
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
});

router.get('/:id', (req, res) => {
  Feed.findById(req.params.id)
    .then(feed => {
      if (!feed) {
        res.status(404).json({ message: 'Feed not found' });
      } else {
        updateFeed(feed._id)
          .then(updatedFeed => {
            Feed.findById(updatedFeed.id)
              .populate('feedItems')
              .then(populatedFeed => {
                res.status(200).json(populatedFeed)
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
});

// router.put('/:id', (req, res) => {
//   const { url, title, description, link, category } = req.body;
//   Feed.findByIdAndUpdate(req.params.id, { url, title, description, link, category }, { new: true })
//     .then(updatedFeed => {
//       res.status(200).json(updatedFeed);
//     })
//     .catch(err => {
//       res.json(err);
//     })
// });

router.delete('/:id', (req, res) => {
  User.findByIdAndUpdate(req.user._id, { $pull: { feeds: req.params.id } })
    .then(() => {
      res.status(200).json({ message: 'Feed deleted' });
    })
    .catch(err => {
    res.json(err);
  })
})

router.get('/item/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      if (!item) {
        res.status(404).json({ message: 'Item not found' });
      } else {
        res.status(200).json(item);
      }
    })
});

router.put('/item/:id', (req, res) => {
  console.log(req.body);
  if (req.body.starred) {
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
  } else if (!req.body.starred) {
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
  } else if (req.body.read) {
    User.findByIdAndUpdate(req.user._id, { $push: { read: req.params.id } }, { new: true })
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
  } else if (!req.body.read) {
    User.findByIdAndUpdate(req.user._id, { $pull: { read: req.params.id } }, { new: true })
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
});

// const updateFeed = async (id) => {
//   try {
//     const feed = await Feed.findById(id);
//   } catch (err) {
//     return err;
//   };
//   try {
//     const parsedFeed = await parser.parseURL(feed.feedUrl)
//   } catch (err) {
//     return err;
//   };
//   for (let item of parsedFeed.items) {
//     try {
//       const existingItem = await Item.findOne({ title: item.title, link: item.link, isoDate: item.isoDate, feed: feed._id })
//     } catch (err) {
//       return err;
//     };
//     if (!existingItem) {
//       try {
//         const newItem = await Item.create({ ...item, feed: feed._id })
//       } catch (err) {
//         return err;
//       };
//       try {
//         const updatedFeed = await Feed.findByIdAndUpdate(feed._id, { $push: { feedItems: { $each: [newItem._id], $position: 0 } } }, { new: true })
//       } catch (err) {
//         return err;
//       };
//     }
//   }
//   console.log('updated');
//   return feed;
// }

const updateFeed = async (id) => {
  try {
    const feed = await Feed.findById(id);
    const parsedFeed = await parser.parseURL(feed.feedUrl)
    for (let item of parsedFeed.items) {
      const existingItem = await Item.findOne({ title: item.title, link: item.link, isoDate: item.isoDate, feed: feed._id });
      if (!existingItem) {
        const newItem = await Item.create({ ...item, feed: feed._id });
        await Feed.findByIdAndUpdate(feed._id, { $push: { feedItems: { $each: [newItem._id], $position: 0 } } }, { new: true });
      }
    }
    const updatedFeed = await Feed.findById(id);
    return updatedFeed;
  } catch (err) {
    console.log(err);
  }
}

module.exports = router;