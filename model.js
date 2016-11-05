var dbModel = function() {


 var mongoose = require('mongoose');
 mongoose.Promise = global.Promise;

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
  user: mongoose.model('User', schemas.user),
  girl: mongoose.model('Girl', schemas.girl),
  food: mongoose.model('Food', schemas.food),
  user_food: mongoose.model('UserFood', schemas.user_food),
  weight: mongoose.model('Weight', schemas.weight),
  girl_weight: mongoose.model('GirlWeight', schemas.weight),
  traning: mongoose.model('Training', schemas.training),
  user_training: mongoose.model('UserTraining', schemas.user_training),
};

 // コネクト
 mongoose.connect('mongodb://localhost/sample_db');

 function save(modelName, data, _callback) {
   var callback = _callback || function(){};
   var _model= models[modelName];
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

 function find(modelName, query, option, callback) {
   console.log(modelName);
   models[modelName].find(query, option, function(err, data) {
     if(err) {
       console.log(err);
     }
     callback(data);
   });
 }


 return {
   save: save,
   find: find
 };
};

module.exports = dbModel;
