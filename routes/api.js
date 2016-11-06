var express = require('express');
var router = express.Router();
var Model = require('../model.js');
var loginCheck = require('../loginChecker.js');
var isSameDay = require('../modules/isSameDay');


router.post('/add/:modelName', loginCheck, function(req,res){
  Model.save(req.params.modelName, req.body, function(){
      res.send({result: true});
  });
});

router.post('/add/weight', function(req, res) {
  res.redirect('/');
});

//間に合いそうにない……
router.post('/set_user_food', loginCheck, function(req, res) {
  var user_id = req.session.user_id;
  Model.find('food', {}, {}, function(data) {
    console.log(data);
    var l = data.length;
    var rand_num = Math.floor(Math.random()*l);
    var _data = data[rand_num];
    Model.save('user_food', {
      food_id: _data['food_id'],
      user_id: user_id,
      is_ate: false,
      date: (new Date()).toString()
    });
    res.json(data[rand_num]);
  });
});

router.get('/apis/get_one_week_data', loginCheck, function(req, res) {
  var user_id =  req.session.user_id;
  var today = new Date();
  var ret = {
    weight: {
    },
    food: {
    }
  }

  Models.find('weight', {user_id: user_id}, {}, function(data1) {
    Model.find('user_food', {user_id: user_id}, {}, function(data2) {
      // var sevenDaysAgo = computeDate(today.getFullYear(), today.getMonth()+1, today.getDate(), -7);
      // for(var i=0; i<data1.length; i++) {
      //   var d = new Date(data1[i].date);
      //   if(d > sevenDaysAgo) {
      //     var key = (d-sevenDaysAgo) % 86400000;
      //     ret['weight'][key].push(d);
      //   } else {break;}
      // }
      // for(var i = 0; i < data2.length; i++) {
      //   var d = new Date(data2[i].date);
      //   if(d > sevenDaysAgo) {
      //     var key = (d-sevenDaysAgo) % 86400000
      //     Model.findOne('food', {food_id: data2[i].food_id}, {}, function(food) {
      //       ret['food'][key].push(food);
      //     });
      //   }else{break;}
      // }
      res .json(ret);
    });
  });
});

function computeDate(year, month, day, addDays) {
    var dt = new Date(year, month - 1, day);
    var baseSec = dt.getTime();
    var addSec = addDays * 86400000;//日数 * 1日のミリ秒数
    var targetSec = baseSec + addSec;
    dt.setTime(targetSec);
    return dt;
}


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


router.get('/get/rest_calorie', loginCheck, function(req, res) {

  Model.findOne('user', {user_id: req.session.user_id}, {}, function(data1) {
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
        res.json({rest_calorie: data1['allowed_calorie'] || 2000});
      } else {
        var sum_calorie = 0;
        Model.find('food', {$or: food_ids} , {}, function(data3) {
          data3.forEach(function(food) {
            sum_calorie+=food.calorie;
          });
          var rest = data1.allowed_calorie - sum_calorie;
          res.json({rest_calorie: rest});
        });
      }
    });
  });
});

//ユーザの情報を取得
router.get('/get/:modelName', loginCheck, function(req,res){
  // console.log('aiueo');
  // console.log(req.params.modelName);
  var user_id = req.session.user_id;

  Model.find(req.params.modelName, {user_id: user_id}, {}, function(data) {
    console.log(data);
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
