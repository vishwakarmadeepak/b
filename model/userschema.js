const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
  },
  password: {
    type: String,
    require,
  },
  img: {
    type: String,
    require,
  },
});
const user = mongoose.model("user", schema);
module.exports = user;
