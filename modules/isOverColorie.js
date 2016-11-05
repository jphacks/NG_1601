var isOverColorie = function(user_id, date, _callback){
  var Model = require('../model');
  var callback = _callback || function(){};
  var allowed_colorie;


  Model.findOne('User',{_id:user_id}, function(err,user){
    allowed_colorie = user.allowed_colorie;
  });

  Model.find('UserFood', {user_id:user_id, date:date}, function(err,user_foods){
    var sumColorie;
    for (var i = 0;i<user_foods.length;i++){
      sumColorie += user_foods[i].allowed_colorie;
    }
    return (sumColorie > allowed_colorie);
  });
};

module.exports = isOverColorie;
