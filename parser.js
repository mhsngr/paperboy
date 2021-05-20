const Parser = require('rss-parser');

const parser = new Parser();

parser.parseURL('http://www.theguardian.com/rss')
  .then(parsedFeed => {
    console.log(parsedFeed.items.map(item => item.categories));
  })
  .catch(err => {
    console.log(err);
  })