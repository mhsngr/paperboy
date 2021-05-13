const { Schema, model } = require("mongoose");

const feedSchema = new Schema({
  feedUrl: String,
  title: String,
  description: String,
  link: String,
  category: String,
  language: String,
  image: {
    link: String,
    url: String,
    title: String
  },
  feedItems: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item'
    }
  ]
}, { timestamps: true });

const Feed = model("Feed", feedSchema);

module.exports = Feed;