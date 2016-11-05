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



/*****************************************
traning
*****************************************/
// var traning_sample_data = [
//   {
//     name: '背筋20回',
//     calorie: '30'
//   },
//   {
//     name: '腕立て伏せ30回',
//     calorie: '80',
//   },
//   {
//     name: 'スクワット20回',
//     calorie: '100',
//   },
//   {
//     name: 'ドラゴンフラッグ5回',
//     calorie: '300'
//   }
// ];
//
// traning_sample_data.forEach(function(d) {
//   dbM.save('training', d);
// });



dbM.find('user',     {}, {}, function   (users) {
dbM.find('food',     {}, {}, function   (foods) {
dbM.find('training', {}, {}, function(trainings) {

  /*****************************************
  user
  *****************************************/
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



  /*****************************************
  weight
  *****************************************/
  // var weight_sample_data = [
  //   {
  //     user_id: users[1]._id,
  //     weight: 100,
  //     date: (new Date("Sat, 1 Nov 2016 00:00:00 +0900")).toString(),
  //   },
  //   {
  //     user_id: users[1]._id,
  //     weight: 99,
  //     date: (new Date("Sat, 2 Nov 2016 00:00:00 +0900")).toString(),
  //   },
  //   {
  //     user_id: users[1]._id,
  //     weight: 98,
  //     date: (new Date("Sat, 3 Nov 2016 00:00:00 +0900")).toString(),
  //   },
  //   {
  //     user_id: users[1]._id,
  //     weight: 97,
  //     date: (new Date("Sat, 4 Nov 2016 00:00:00 +0900")).toString(),
  //   },
  //   {
  //     user_id: users[1]._id,
  //     weight: 96,
  //     date: (new Date("Sat, 5 Nov 2016 00:00:00 +0900")).toString(),
  //   },
  //
  //   {
  //     user_id: users[2]._id,
  //     weight: 86,
  //     date: (new Date("Sat, 1 Nov 2016 00:00:00 +0900")).toString(),
  //   },
  //   {
  //     user_id: users[2]._id,
  //     weight: 86,
  //     date: (new Date("Sat, 2 Nov 2016 00:00:00 +0900")).toString(),
  //   },
  //   {
  //     user_id: users[2]._id,
  //     weight: 87,
  //     date: (new Date("Sat, 3 Nov 2016 00:00:00 +0900")).toString(),
  //   },
  //   {
  //     user_id: users[2]._id,
  //     weight: 87,
  //     date: (new Date("Sat, 4 Nov 2016 00:00:00 +0900")).toString(),
  //   },
  //   {
  //     user_id: users[2]._id,
  //     weight: 89,
  //     date: (new Date("Sat, 5 Nov 2016 00:00:00 +0900")).toString(),
  //   },
  // ];
  // weight_sample_data.forEach(function(d) {
  //   dbM.save('weight', d);
  // });



  /*****************************************
  user_food
  *****************************************/
  // var user_food_sample = [
  //   {
  //     user_id: users[0]._id,
  //     food_id: foods[0]._id,
  //     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
  //   },
  //   {
  //     user_id: users[0]._id,
  //     food_id: foods[1],
  //     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
  //   },
  //   {
  //     user_id: users[0]._id,
  //     food_id:foods[2] ,
  //     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
  //   },
  //   {
  //     user_id: users[1]._id,
  //     food_id: foods[0]._id,
  //     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
  //   },
  //   {
  //     user_id: users[1]._id,
  //     food_id: foods[0]._id,
  //     date: (new Date('Sun, 2 Nov 2016 00:00:00 +0900')).toString(),
  //   },
  //   {
  //     user_id: users[1]._id,
  //     food_id: foods[0]._id,
  //     date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
  //   },
  //   {
  //     user_id: users[2]._id,
  //     food_id: foods[0]._id,
  //     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
  //   },
  //   {
  //     user_id: users[3]._id,
  //     food_id: foods[1]._id,
  //     date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
  //   }
  // ];
  // user_food_sample.forEach(function(d) {
  //   dbM.save('user_food', d);
  // });



  /*****************************************
  girl_weight
  *****************************************/
  var girl_weight_sample = [
    {
      user_id:  users[0]._id,
      weight:   50,
      date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
    },
  ];


  /*****************************************
  user_training
  *****************************************/


});
});
});
