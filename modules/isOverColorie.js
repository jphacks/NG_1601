
var isOverColorie = function(user_id, _callback){
  var Model = require('../model');
  var callback = _callback || function(){};
  var allowed_colorie;
  var overCount;


  Model.findOne('User',{_id:user_id}, function(err,user){
    allowed_colorie = user.allowed_colorie;

  Model.find('UserFood', {user_id:user_id}, limit:1000, function(err,user_foods){
    var checkDailyCalories;

    var today = new Date();
    //直近三日間を調べる
    for (var k = 1; k<4;k++){
      //取得した1000個のuser_foodsに対して、直近３日間のいずれかに該当しているかチェック
      for (var i = 0; i<user_foods.length; i++) {
        if (user_foods[i].date.getDate() = today.setDate(today.getDate() - k)) {
          Model.findOne('Food', {id:user_foods[i].food_id}, function(food){
            checkDailyCalories[k].push(food.colorie);
          });
        }
      }
    }

    var sum  = function(arr) {
        var sum = 0;
        for (var i=0,len=arr.length; i<len; ++i) {
            sum += arr[i];
        };
        return sum;
    };
    //直近３日間のそれぞれの日にちに対して、その日の摂取カロリー量が、一日の許容カロリー量を超えたかチェック
    for (var i = 0;i<checkDailyCalories.length;i++){
      sumDailyColorie += sum(checkDailyCalories[i])
      if sumDailyColorie > allowed_colorie {
        overCount += 1;
      }
    }
  });
  });
  return (overCount > 1);
};



module.exports = isOverColorie;
