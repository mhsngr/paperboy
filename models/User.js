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
      ref: 'Feed'
    }
  ]
});

const User = model("User", userSchema);

module.exports = User;