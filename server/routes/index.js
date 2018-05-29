var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var conn = mongoose.connect('mongodb://127.0.0.1:27017/blog');
var User = new mongoose.Schema({
  name: String,
  email: String,
  age: String
});

mongoose.connect('mongodb://127.0.0.1:27017/dumall');

mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});

// var myModel = conn.model('user', User);

/* GET index listing. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
  // myModel.findOne({name:"yezi"}, function (err, user) {
  //   console.log(user);
  //   res.render('index', {title: 'Express', user: user });
  // });
});

module.exports = router;

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;
