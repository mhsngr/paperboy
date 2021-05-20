const Parser = require('rss-parser');

const parser = new Parser();

parser.parseURL('http://')
  .then(parsedFeed => {
    console.log(parsedFeed);
  })
  .catch(err => {
    console.log(err);
  })