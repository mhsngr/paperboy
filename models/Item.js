const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  title: String,
  link: String,
  author: String,
  content: String,
  contentSnippet: String,
  isoDate: Date,
  read: {
    type: Boolean,
    default: false
  },
  starred: {
    type: Boolean,
    default: false
  },
  feed: {
    type: Schema.Types.ObjectId,
    ref: 'Feed'
  }
});

const Item = model("Item", itemSchema);

module.exports = Item;