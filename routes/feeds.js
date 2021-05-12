const router = require("express").Router();
const Feed = require('../models/Feed');
const Item = require('../models/Item');
const User = require('../models/User');
const Parser = require('rss-parser');

const parser = new Parser();


router.post("/", (req, res) => {
  const url = req.body.url;
  Feed.findOne({ url: url })
    .then(feed => {
      if (feed !== null) {
        return res.status(400).json({ message: 'This feed already exists' });
      } else {
        parser.parseURL(url)
          .then(parsedFeed => {
            const { title, description, link, category, items } = parsedFeed;
            Feed.create({
              url,
              title,
              description,
              link,
              category
            })
            .then(createdFeed => {
              User.findByIdAndUpdate(req.user._id, { $push: { feeds: createdFeed._id } })
                .then(() => {
                  Item.insertMany(items.map(item => ({...item, feed: createdFeed._id})))
                    .then(createdItems => {
                      const itemIds = createdItems.map(item => item._id);
                      Feed.findByIdAndUpdate(createdFeed._id, { $push: { items: itemIds } }, { new: true })
                        .then(updatedFeed => {
                          res.status(201).json(updatedFeed);
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
          })
          .catch(err => {
            res.json(err);
          })
      }
    })
});

router.get('/:id', (req, res) => {
  Feed.findById(req.params.id)
    .then(feed => {
      if (!feed) {
        res.status(404).json(feed);
      } else {
        parser.parseURL(feed.url)
          .then(parsedFeed => {
            console.log(feed.updatedAt);
            const newItems = parsedFeed.items.filter(item => new Date(item.isoDate) > feed.updatedAt);
            console.log(newItems);
            Item.insertMany(newItems.map(item => ({...item, feed: feed._id})))
              .then(insertedItems => {
                const itemIds = insertedItems.map(item => item._id);
                Feed.findByIdAndUpdate(feed._id, { $push: { items: { $each: itemIds, $position: 0 } } }, { new: true })
                  .populate('items')
                  .then(updatedFeed => {
                    res.status(200).json(updatedFeed);
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

router.put('/:id', (req, res) => {
  const { url, title, description, link, category } = req.body;
  Feed.findByIdAndUpdate(req.params.id, { url, title, description, link, category }, { new: true })
    .then(updatedFeed => {
      res.status(200).json(updatedFeed);
    })
    .catch(err => {
      res.json(err);
    })
});

router.delete('/:id', (req, res) => {
  Item.deleteMany({ feed: req.params.id })
    .then(() => {
      Feed.findByIdAndDelete(req.params.id)
        .then(() => {
          User.findByIdAndUpdate(req.user._id, { $pull: { feeds: req.params.id } })
           .then(() => {
             res.status(200).json({ message: 'Feed deleted' });
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

router.get('/item/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      if (!item) {
        res.status(404).json(item);
      } else {
        res.status(200).json(item);
      }
    })
});

router.put('/item/:id', (req, res) => {
  const { read, starred } = req.body;
  Item.findByIdAndUpdate(req.params.id, { read, starred }, { new: true })
    .then(item => {
      res.status(200).json(item);
    })
    .catch(err => {
      res.json(err);
    })
});

module.exports = router;