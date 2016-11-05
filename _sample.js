 var dbM = require('./model.js');

/*****************************************
user
*****************************************/
// var user_sample_data = [
//   {
//     name: 'suginyan',
//     email: 'suginyan@sugisugi.jp',
//     password: 0000,
//     gender: 0,
//     age: 22
//   },
//   {
//     name: 'tasuo',
//     email: 'tasuo@sugisugi.jp',
//     password: 0000,
//     gender: 0,
//     age:22
//   },
//   {
//     name: 'uuusiro',
//     email: 'uuusiro@sugisugi.jp',
//     password: 0000,
//     gender: 0,
//     age: 22
//   },
//   {
//     name: 'hisatoshi',
//     email: 'hisatoshi@sugisugi.jp',
//     password: 0000,
//     gender: 0,
//     age: 23
//   },
//   {
//     name: 'chika',
//     email:'chika@sugisugi.jp',
//     password: 0000,
//     gender: 1,
//     age: 55
//   }
// ];
//   user_sample_data.forEach(function(user) {
//     dbM.save('user', user);
//   });
//



/*****************************************
food
*****************************************/
// var food_sample_data = [
//   {
//     name: 'かつどぅん',
//     calorie: 922
//   },
//   {
//     name: 'てんどぅん',
//     calorie: 522
//   },
//   {
//     name: 'ぎゅうどぅん',
//     calorie: 708
//   },
// ];
// food_sample_data.forEach(function(data) {
//   dbM.save('food', data);
// });



  dbM.find('user', {}, {},function(users) {


    // 女の子の登録
  //   var girl_sample_data = [
  //     {
  //       user_id: users[0]._id,
  //       status: 2,
  //     },
  //     {
  //       user_id: users[0]._id,
  //       status: 1,
  //     },
  //     {
  //       user_id: users[1]._id,
  //       status: 2,
  //     },
  //     {
  //       user_id: users[2]._id,
  //       status: 3,
  //     }
  //   ];
  //   girl_sample_data.forEach(function(d) {
  //     dbM.save('girl', d);
  //   });



});



//
// var weight_sample_data = [
//   {
//     user_id: 1,
//     weight: 100,
//     date: new Date("Sat, 1 Nov 2016 00:00:00 +0900"),
//   },
//   {
//     user_id: 1,
//     weight: 99,
//     date: new Date("Sat, 2 Nov 2016 00:00:00 +0900"),
//   },
//   {
//     user_id: 1,
//     weight: 98,
//     date: new Date("Sat, 3 Nov 2016 00:00:00 +0900"),
//   },
//   {
//     user_id: 1,
//     weight: 97,
//     date: new Date("Sat, 4 Nov 2016 00:00:00 +0900"),
//   },
//   {
//     user_id: 1,
//     weight: 96,
//     date: new Date("Sat, 5 Nov 2016 00:00:00 +0900"),
//   },
//
//   {
//     user_id: 2,
//     weight: 86,
//     date: new Date("Sat, 1 Nov 2016 00:00:00 +0900"),
//   },
//   {
//     user_id: 2,
//     weight: 86,
//     date: new Date("Sat, 2 Nov 2016 00:00:00 +0900"),
//   },
//   {
//     user_id: 2,
//     weight: 87,
//     date: new Date("Sat, 3 Nov 2016 00:00:00 +0900"),
//   },
//   {
//     user_id: 2,
//     weight: 87,
//     date: new Date("Sat, 4 Nov 2016 00:00:00 +0900"),
//   },
//   {
//     user_id: 2,
//     weight: 89,
//     date: new Date("Sat, 5 Nov 2016 00:00:00 +0900"),
//   },
// ];
//

//
//
