var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  "userName":String,
  "userAge":Number
});

module.exports = mongoose.model("user",userSchema);
