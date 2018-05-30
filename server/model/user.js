var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  "userName":String,
  "userPsw":Number
});

module.exports = mongoose.model("user",userSchema);
