const { Schema, model } = require("mongoose");

const feedSchema = new Schema({
  url: String,
  title: String,
  description: String,
  link: String,
  category: String,
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item'
    }
  ]
}, { timestamps: true });

const Feed = model("Feed", feedSchema);

module.exports = Feed;