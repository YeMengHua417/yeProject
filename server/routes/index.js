var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


var User = require('../model/user');//模型


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

  // var user = new User({
  //   userName : 'Tracy McGrady',                 //用户账号
  //   userAge: 18                           //密码
  // });
  //
  // user.save(function (err, res) {
  //
  //   if (err) {
  //     console.log("Error:" + err);
  //   }
  //   else {
  //     console.log("Res:" + res);
  //   }
  //
  // });



  User.findOne({userName:"guanyuanxin"},function (err,doc) {
    console.log("I am here")
    console.log(err,doc)
    res.render('index', {user: doc});
  })

});

module.exports = router;

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;
