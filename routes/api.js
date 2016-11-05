var express = require('express');
var router = express.Router();
var Model = require('../model.js');
var loginCheck = require('../loginChecker.js');
// var mongodb = require('mongodb');
// var mongoose = require('mongoose');


// router.get('/user', loginCheck, function(req,res){
//   Model.find('user', req.params.query, function(data) {
//     res.send(data);
//   });
// });

router.post('/add/:schemaName', loginCheck, function(req,res){
  Model.save(req.params.schemaName, req.body, function(err,user){
      if(err) throw err;
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

//ユーザの情報を取得
router.get('/get/:modelName', loginCheck, function(req,res){
  Model.find(req.params.modelName, req.session.user, {}, function(data) {
    res.send(data);
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
  };
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
  };
  res.send(ret);
});
