var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  "userName":String,
  "userPsw":String
});

module.exports = mongoose.model("user",userSchema);
