var dbModel = function() {

 var mongoose = require('mongoose');

 // 定義フェーズ
 var Schema   = mongoose.Schema;

 //スキーマをたくさん
 var UserSchema = new Schema({
   name:     String,
   email:    String,
   password: String,
   gender:   Number,
   age:      Number
 });

 var FoodSchema = new Schema({
   name:     String,
   calorie:  Number
 });

 var WeightSchema = new Schema({
   user_id:  Number,
   weight:   Number,
   date:     Date
 });

 var WeightTransitionSchema = new Schema({
   user_id:         Number,
   changed_weight:  Number,
   event_at:        Date
 });

 var GirlSchema = new Schema({
   name:     String,
   status:   Number
 });

 var TrainingSchema = new Schema({
   name:     String,
   calorie:  Number
 });

 var AteSchama = new Schama({
   user_id: Number,
   food_id: Number,
   date:    Date
 });

 //

 //モデルの登録をたくさん
 mongoose.model('User', UserSchema);
 mongoose.model('Food', FoodSchema);
 mongoose.model('Weight', WeightSchema);
 mongoose.model('WeightTransition', WeightTransitionSchema);
 mongoose.model('Girl', GirlSchema);
 mongoose.model('Training', TrainingSchema);
 mongoose.model('Ate', AteSchema);



 //



 // コネクト
 mongoose.connect('mongodb://localhost/sample_db');




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


 function save(スキーマ名, データ, コールバック) {

 }

 function find(スキーマ名, クエリ, コールバック) {

 }

 return {
   save: save,
   find: find
 };
};

module.exports = dbModel;
