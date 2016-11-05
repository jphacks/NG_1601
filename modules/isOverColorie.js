// var isOverColorie = function(user_id, date, _callback){
//   var Model = require('../model');
//   var callback = _callback || function(){};
//   var allowed_colorie;
//
//
//   Model.findOne('user',{_id:user_id}, {}, function(user){
//     allowed_colorie = user.allowed_colorie;
//
//     Model.find('user_food', {user_id:user_id, date:date}, {},  function(user_foods){
//       var sumColorie;
//       for (var i = 0;i<user_foods.length;i++){
//           Model.findOne('food', {food_id: user_foods[i].food_id}, {}, function(food) {
//             sumColorie += user_foods[i].colorie;
//           });
//           return (sumColorie > allowed_colorie);
//       }
//
//     });
//   });
// };
//
// module.exports = isOverColorie;
