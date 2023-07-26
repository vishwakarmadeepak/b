const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("collection", userSchema);

module.exports = user;
