// var hoge  = new Date("Sat, 3 Nov 2016 00:00:00 +0900");
//
// console.log(hoge);
// hoge_str = hoge.toString();
// console.log(hoge_str);
// console.log(new Date(hoge_str))
// console.log((new Date('Sat, 3 Nov 2016 00:00:00 +0900')).toString());
//
// var h = {
//   date: (new Date('Sat, 3 Nov 2016 00:00:00 +0900')).toString()
// };
// console.log(h);

// var Model = require('./model.js');
// var isSameDay = require('./modules/isSameDay.js');
//
// function hoge() {
//   Model.findOne('user', {user_id: req.session.user_id}, {}, function(data1) {
//     console.log(data1);
//     Model.find('user_food', {user_id: req.session.user_id}, {}, function(data2) {
//       var food_ids = [];
//       var today = (new Date()).toString();
//       // var today = 'Tue Nov 01 2016 00:00:00 GMT+0900 (JST)'
//       data2.forEach(function(d) {
//         if(isSameDay(today, d.date)) {
//           food_ids.push({
//             food_id: d['food_id']
//           });
//         }
//       });
//       if(food_ids.length === 0) {
//         res.send(data1.allowed_calorie);
//       }
//       var sum_calorie = 0;
//       Model.find('food', {$or: food_ids}, {}, function(data3) {
//         data3.forEach(function(food) {
//           sum_calorie+=food.calorie;
//         });
//         var rest = data1.allowed_calorie - sum_calorie;
//         res.json({rest_calorie: rest});
//       })
//     });
//   });
// }
//
// hoge();



var hoge = [
  
]
