const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  title: String,
  link: String, 
  author: String,
  creator: String,
  // enclosure: {
  //   type: String,
  //   url: String,
  //   length: String
  // },
  categories: [ String ],
  comments: String,
  'content:encoded': String,
  content: String,
  contentSnippet: String,
  isoDate: Date,
  guid: String,
  id: String,
  feed: {
    type: Schema.Types.ObjectId,
    ref: 'Feed'
  }
});

const Item = model("Item", itemSchema);

module.exports = Item;