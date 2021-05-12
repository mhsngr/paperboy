const router = require("express").Router();
const Feed = require('../models/Feed');
const Parser = require('rss-parser');

const parser = new Parser();


router.get("/", (req, res, next) => {
  parser.parseURL('https://news.ycombinator.com/rss')
    .then(feed => res.json(feed))
    .catch(err => console.log(err))
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
