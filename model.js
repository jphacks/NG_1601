var dbModel = function() {

 var mongoose = require('mongoose');

 // 定義フェーズ
 var Schema   = mongoose.Schema;

 //スキーマをたくさん

var schemas = {
  user: new Schema({
    name:     String,
    email:    String,
    password: String,
    gender:   Number,
    age:      Number
  }),
  girl: new Schema({
    user_id:  Number,
    status:   Number,
  }),
  food: new Schema({
    name:     String,
    calorie:  String
  }),
  user_food: new Schema({
    user_id: Number,
    food_id: Number,
    date:    Date
  }),
  weight:  new Schema({
    user_id:  Number,
    weight:   Number,
    date:     Date
  }),
  girl_weight:  new Schema({
    user_id:  Number,
    weight:   Number,
    date:     Date
  }),
  training: new Schema({
    name:     String,
    calorie:  Number
  }),
  user_training: new Schema({
    user_id:     Number,
    training_id: Number,
    date:        Date
  })
};

var models = {
  user: ('User', schemas.user),
  girl:, ('Girl', schemas.girl),
  food: ('Food', schemas.food),
  user_food: ('UserFood', schemas.user_food),
  weight: ('Weight', schemas.weight),
  girl: ('Girl', schemas.girl),
  girl_weight: ('GirlWeight', schemas.weight),
  traning: ('Training', schemas.traning),
  user_training: ('UserTraining', schemas.user_training),
};

 // コネクト
 mongoose.connect('mongodb://localhost/sample_db');

 function save(modelname, data, callback) {
   var _model = models[modelname];
   var model = new _model();
   Object.keys(data).forEach(function(key) {
     model[key] = data[key];
   });
   model.save(function(err) {
     //とりあえず
     if(err) {console.log(err);}
     callback();
   })
 }


 //セーブのサンプル
 // var User = mongoose.model('User');
 // var user = new User();
 // user.name  = 'KrdLab';
 // user.point = 777;
 // user.save(function(err) {
 //   if (err) { console.log(err); }
 // });

 // ※注意：イベント駆動

 //ファインドのサンプル
 // User.find({}, function(err, docs) {
 //   for (var i=0, size=docs.length; i<size; ++i) {
 //     console.log(docs[i].doc.name);
 //   }
 // });



 function find(modelname, クエリ, コールバック) {

 }

 return {
   save: save,
   find: find
 };
};

module.exports = dbModel;
