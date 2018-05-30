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
router.post('/login',function (req,res,next) {
  var param = {
    userName:req.body.userName,
    userPsw:req.body.userPsw
  }

  console.log(param);

  var user = new User({
    userName : 'Tracy McGrady',                 //用户账号
    userPsw: 18                           //密码
  });

  user.save(function (err, res) {

    if (err) {
      console.log("Error:" + err);
    }
    else {
      console.log("Res:" + res);
    }

  });


  User.findOne(param,function (err,doc) {
    console.log(err,doc)
   if(err){
      res.json({
        status:1,
        msg:err.message
      })
   }else{
     if(doc){
       res.cookie("userId",doc._id,{
         path:'/',
         maxAge:1000*60*60
       });
       res.cookie("userName",doc.userName,{
         path:'/',
         maxAge:1000*60*60
       });

       res.json({
         status:'0',
         msg:'',
         result:{
           userName:doc.userName
         }
       });
     }
   }

  })


});

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
