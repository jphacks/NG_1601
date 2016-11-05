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
  food: new Schema({
    name: String,
    calorie: Number
  }),
  weight:  new Schema({
    user_id:  Number,
    weight:   Number,
    date:     Date
  }),
  girl: new Schema({
    user_id: Number,
    name:     String,
    status:   Number
  }),
  traning: new Schema({
    id: Number,
    neme: String,
    calorie: Number,
  }),
  ate: new Schama({
    user_id: Number,
    food_id: Number,
    date:    Date
  })
};

var models = {
  user: ('User', schemas.user),
  food: ('Food', schemas.food),
  weight: ('Weight', schemas.weight),
  weightTransition:, ('WeightTransition', schemas.weightTransition),
  girl:, ('Girl', schemas.girl),
  traning: ('Training', schemas.traning),
  ate: ('Ate', schemas.ate)
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



 function find(スキーマ名, クエリ, コールバック) {

 }

 return {
   save: save,
   find: find
 };
};

module.exports = dbModel;
