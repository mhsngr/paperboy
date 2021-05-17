const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  feeds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Feed',
      unique: true
    }
  ],
  read: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Feed',
      unique: true
    }
  ],
  starred: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Feed',
      unique: true
    }
  ]
});

const User = model("User", userSchema);

module.exports = User;