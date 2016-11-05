var express = require('express');
var router = express.Router();
var Model = require('../model.js');
var loginCheck = require('../loginChecker.js');
var isSameDay = require('../modules/isSameDay');


// router.get('/user', loginCheck, function(req,res){
//   Model.find('user', req.params.query, function(data) {
//     res.send(data);
//   });
// });

router.post('/add/:modelName', loginCheck, function(req,res){
  Model.save(req.params.modelName, req.body, function(){
      res.send({result: true});
  });
});


/*********************************************************
こっからがGET
*********************************************************/


////////////////////////////////////////////////////////////////////
/*
user_idはセッションにより取得
*/


//ユーザが持っている食べ物一覧
router.get('/get/food_list', loginCheck, function(req, res) {
  Model.find('user_food', {user_id: request.session.user_id}, {}, function(data) {
    var ret = [];

    data.forEach(function(d) {
      var _ret = {};
      _ret.food_id = d.food_id;
      _ret.date = d.date;

      Model.findOne('food', {food_id: d.food_id}, {}, function(f) {
        _ret.calorie = f.calorie;
        _ret.name = f.name;
      });
    });
    ret.push(_ret);
  });
  res.send(ret);
});

//ユーザが持っているトレーニング一覧
router.get('/get/traning_list', loginCheck, function(req, res) {
  Model.find('user_training', {user_id: request.session.user_id}, {}, function(data) {
    var ret = [];

    data.forEach(function(d) {
      var _ret = {};
      _ret.traning_id = d.traning_id;
      _ret.date = d.date;

      Model.findOne('food', {traning_id: d.traning_id}, {}, function(f) {
        _ret.calorie = f.calorie;
        _ret.name = f.name;
      });
    });
    ret.push(_ret);
  });
  res.send(ret);
});


router.get('/get/rest_calorie', function(req, res) {
  console.log('---------------------------------------');
  Model.findOne('user', {user_id: req.session.user_id}, {}, function(data1) {
    console.log(data1);
    Model.find('user_food', {user_id: req.session.user_id}, {}, function(data2) {
      var food_ids = [];
      var today = (new Date()).toString();
      // var today = 'Tue Nov 01 2016 00:00:00 GMT+0900 (JST)'
      data2.forEach(function(d) {
        if(isSameDay(today, d.date)) {
          food_ids.push({
            food_id: d['food_id']
          });
        }
      });
      if(food_ids.length === 0) {
        console.log(data1);
        console.log(req.session.user_id);
        res.json(data1.allowed_calorie);
      }
      var sum_calorie = 0;
      Model.find('food', {$or: food_ids}, {}, function(data3) {
        data3.forEach(function(food) {
          sum_calorie+=food.calorie;
        });
        var rest = data1.allowed_calorie - sum_calorie;
        res.json({rest_calorie: rest});
      })
    });
  });
});

//ユーザの情報を取得
router.get('/get/:modelName', loginCheck, function(req,res){
  var user_id = req.session.user_id;

  Model.find(req.params.modelName, {user_id: user_id}, {}, function(data) {
    res.json(data);
  });
});

//↑これで
//↓の奴が出来る．

// //user_idの女の子の情報を取得
// router.get('/get/girl', loginCheck, function(req,res){
// });
//
//
// //user_idで食べ物取得
// router.get('/get/user_food', loginCheck, function(req,res){
// });
//
// //user_idの体重を取得
// router.get('/get/weight', loginCheck, function(req,res){
// });
//
// //user_idの女の子の体重を取得
// router.get('/get/girl_weight', loginCheck, function(req,res){
// });
//
//
// //:user_idのトレーニングを取得
// router.get('/get/traning', loginCheck, function(req,res){
//
// });
//
//
// router.get('/get/traning/', loginCheck, function(req,res){
// });
//
//
// //food_idの食べ物情報を取得
// router.get('/get/:food_id', loginCheck, function(req,res){
// });
//
//
// router.get('/get/all_food', loginCheck, function(req, res) {
//
// });





 module.exports = router;
