var dbM = require('./model.js');

/*****************************************
user
*****************************************/
var user_sample_data = [
  {

    name: 'suginyan',
    email: 'suginyan@sugisugi.jp',
    password: '0000',
    gender: 0,
    age: 22,
    user_id: 0,
    allowed_calorie: 2000,
    tresure_positions: [
      {
        x: 0,
        y: 6
      },
      {
        x: 4,
        y: 5
      }
    ],
    current_position: {
      x: 4,
      y: 5
    },
    muscle_point: 10
  },
  {
    name: 'tasuo',
    email: 'tasuo@sugisugi.jp',
    password: '0000',
    gender: 0,
    age:22,
    user_id: 1,
    allowed_calorie: 2000,
    tresure_positions: [
      {
        x: 0,
        y: 6
      },
      {
        x: 4,
        y: 5
      }
    ],
    current_position: {
      x: 4,
      y: 5
    },
    muscle_point: 10

  },
  {
    name: 'uuusiro',
    email: 'uuusiro@sugisugi.jp',
    password: '0000',
    gender: 0,
    age: 22,
    user_id: 2,
    allowed_calorie: 2000,
    tresure_positions: [
      {
        x: 0,
        y: 6
      },
      {
        x: 4,
        y: 5
      }
    ],
    current_position: {
      x: 4,
      y: 5
    },
    muscle_point: 10

  },
  {
    name: 'hisatoshi',
    email: 'hisatoshi@sugisugi.jp',
    password: '0000',
    gender: 0,
    age: 23,
    user_id: 3,
    allowed_calorie: 2000,
    tresure_positions: [
      {
        x: 0,
        y: 6
      },
      {
        x: 4,
        y: 5
      }
    ],
    current_position: {
      x: 4,
      y: 5
    },
    muscle_point: 10

  },
  {
    name: 'chika',
    email:'chika@sugisugi.jp',
    password: 0000,
    gender: 1,
    age: 55,
    user_id: 4,
    allowed_calorie: 2000,
    tresure_positions: [
      {
        x: 0,
        y: 6
      },
      {
        x: 4,
        y: 5
      }
    ],
    current_position: {
      x: 4,
      y: 5
    },
    muscle_point: 10

  }
];
  user_sample_data.forEach(function(user) {
    dbM.save('user', user);
  });




/*****************************************
food
*****************************************/
var food_sample_data = [
  {
    name: 'かつどぅん',
    calorie: 922,
    food_id: 0
  },
  {
    name: 'てんどぅん',
    calorie: 522,
    food_id: 1
  },
  {
    name: 'ぎゅうどぅん',
    food_calorie: 708
  },
];
food_sample_data.forEach(function(data) {
  dbM.save('food', data);
});



/*****************************************
traning
*****************************************/
var traning_sample_data = [
  {
    name: '背筋20回',
    calorie: '30',
    traning_id: 0
  },
  {
    name: '腕立て伏せ30回',
    calorie: '80',
    traning_id: 1
  },
  {
    name: 'スクワット20回',
    calorie: '100',
    traning_id: 2
  },
  {
    name: 'ドラゴンフラッグ5回',
    calorie: '300',
    traning_id: 3
  }
];

traning_sample_data.forEach(function(d) {
  dbM.save('training', d);
});


//この三行はコメントアウトしちゃ駄目
// dbM.find('user',     {}, {}, function   (users) {
// dbM.find('food',     {}, {}, function   (foods) {
// dbM.find('training', {}, {}, function(trainings) {

 /*****************************************
girl
 *****************************************/
  var girl_sample_data = [
    {
      user_id: 0,
      status: 2,
    },
    {
      user_id: 3,
      status: 1,
    },
    {
      user_id: 1,
      status: 2,
    },
    {
      user_id: 2,
      status: 3,
    },
    {
      user_id: 2,
      status: 3,
    }
  ];
  girl_sample_data.forEach(function(d) {
    dbM.save('girl', d);
  });



 /*****************************************
 weight
 *****************************************/
 var weight_sample_data = [
   {
     user_id: 1,
     weight: 100,
     date: (new Date("Sat, 1 Nov 2016 00:00:00 +0900")).toString(),
   },
   {
     user_id: 1,
     weight: 99,
     date: (new Date("Sat, 2 Nov 2016 00:00:00 +0900")).toString(),
   },
   {
     user_id: 1,
     weight: 98,
     date: (new Date("Sat, 3 Nov 2016 00:00:00 +0900")).toString(),
   },
   {
     user_id: 1,
     weight: 97,
     date: (new Date("Sat, 4 Nov 2016 00:00:00 +0900")).toString(),
   },
   {
     user_id: 1,
     weight: 96,
     date: (new Date("Sat, 5 Nov 2016 00:00:00 +0900")).toString(),
   },

   {
     user_id: 2,
     weight: 86,
     date: (new Date("Sat, 1 Nov 2016 00:00:00 +0900")).toString(),
   },
   {
     user_id: 2,
     weight: 86,
     date: (new Date("Sat, 2 Nov 2016 00:00:00 +0900")).toString(),
   },
   {
     user_id: 2,
     weight: 87,
     date: (new Date("Sat, 3 Nov 2016 00:00:00 +0900")).toString(),
   },
   {
     user_id: 2,
     weight: 87,
     date: (new Date("Sat, 4 Nov 2016 00:00:00 +0900")).toString(),
   },
   {
     user_id: 2,
     weight: 89,
     date: (new Date("Sat, 5 Nov 2016 00:00:00 +0900")).toString(),
   },
 ];
 weight_sample_data.forEach(function(d) {
   dbM.save('weight', d);
 });



 /*****************************************
 user_food
 *****************************************/
 var user_food_sample = [
   {
     user_id: 0,
     food_id: 0,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
     is_ate: false
   },
   {
     user_id: 0,
     food_id: 1,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
     is_ate: false
   },
   {
     user_id: 0,
     food_id: 2,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
     is_ate: true
   },
   {
     user_id: 1,
     food_id: 0,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
     is_ate: false
   },
   {
     user_id: 1,
     food_id: 0,
     date: (new Date('Sun, 2 Nov 2016 00:00:00 +0900')).toString(),
     is_ate: false
   },
   {
     user_id: 1,
     food_id: 0,
     date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
     is_ate: false
   },
   {
     user_id: 2,
     food_id: 0,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
     is_ate: true
   },
   {
     user_id: 3,
     food_id: 1,
     date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
     is_ate: false
   }
 ];
 user_food_sample.forEach(function(d) {
   dbM.save('user_food', d);
 });



 /*****************************************
 girl_weight
 *****************************************/
 var girl_weight_sample = [
   {
     user_id:  0,
     weight:   50,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
   },
   {
     user_id:  0,
     weight:   50,
     date: (new Date('Sun, 2 Nov 2016 00:00:00 +0900')).toString(),
   },
   {
     user_id:  0,
     weight:   50,
     date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
   },
   {
     user_id:  1,
     weight:   50,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
   },
   {
     user_id:  1,
     weight:   100,
     date: (new Date('Sun, 2 Nov 2016 00:00:00 +0900')).toString(),
   },
   {
     user_id:  1,
     weight:   200,
     date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
   },

   {
     user_id:  2,
     weight:   50,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
   },
   {
     user_id:  2,
     weight:   40,
     date: (new Date('Sun, 2 Nov 2016 00:00:00 +0900')).toString(),
   },
   {
     user_id:  2,
     weight:   20,
     date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
   },
 ];
 girl_weight_sample.forEach(function(d) {
   dbM.save('girl_weight', d);
 });



 /*****************************************
 user_training
 *****************************************/
 var user_training_sample = [
   {
     user_id: 0,
     training_id: 0,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
     is_inished: true
   },
   {
     user_id: 0,
     training_id: 1,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
     is_inished: false
   },
   {
     user_id: 0,
     training_id:2 ,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
     is_finished: false
   },
   {
     user_id: 1,
     training_id: 0,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
     is_finished: true
   },
   {
     user_id: 1,
     training_id: 0,
     date: (new Date('Sun, 2 Nov 2016 00:00:00 +0900')).toString(),
     is_finished: true
   },
   {
     user_id: 1,
     training_id: 0,
     date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
     is_finished: true
   },
   {
     user_id: 2,
     training_id: 0,
     date: (new Date('Sat, 1 Nov 2016 00:00:00 +0900')).toString(),
     is_finished: false
   },
   {
     user_id: 3,
     training_id: 1,
     date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
     is_finished: false
   },
   {
     user_id: 3,
     training_id: 1,
     date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
     is_finished: true
   },
   {
     user_id: 3,
     training_id: 3,
     date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
     is_finished: true
   },
   {
     user_id: 1,
     training_id: 3,
     date: (new Date('Mon, 3 Nov 2016 00:00:00 +0900')).toString(),
     is_finished: true
   },
 ];
 user_training_sample.forEach(function(d) {
   dbM.save('user_training', d);
 });



//この三行はコメントアウトしちゃ駄目
// });
// });
// });
