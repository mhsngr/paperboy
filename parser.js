const Parser = require('rss-parser');

const parser = new Parser();

parser.parseURL('http://feeds.feedburner.com/AeonMagazineEssays')
  .then(parsedFeed => {
    console.log(parsedFeed);
  })
  .catch(err => {
    console.log(err);
  })