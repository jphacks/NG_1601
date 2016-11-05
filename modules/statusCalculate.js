
/*
  仕様：
    ユーザidより，
    ・そのユーザの女の子のステータス
    ・そのユーザの直近5日(五日に満たない場合は取得可能な数まで)の一日の摂取カロリー
    を取得．
    平均摂取カロリー(allowed_colorie)を上回っている日が過半数（5日なら3日）なら，その女の子の状態を一段階
    不健康にさせる．
    全ての日が満たされている場合は，女の子の状態を一段階よくする
    最後にcallbackを実行する
*/

var statusCalcular = function(user_id, _callback){
  var Model = require('../model');
  var isOverColorie = require('./isOverColorie');
  var callback = _callback || function(){};
  var status;
  var today = new Date();
  var overChecks;

//ユーザーが登録して2日以内だったらGirlのステータスは変化しない
  Model.find('Weight', {user_id:user_id},function(err,weights){
    if (weights.length < 3) {
      return
    };
  });

//直近3日間それぞれ、isOverColorieしているか取得
  for (var i=1; i<4; i++) {
    if (overChecks.push(isOverColorie( user_id, today.setDate(today.getDate() - i) ))) {
      overChecks += 1;
    };
  };

  Model.findOne('Girl', {user_id: user_id}, function(err,girl){
    if (overChecks > 2){
      if (girl.status != 3) {
        girl.status += 1;
      }
    } else {
      if (girl.status != 0) {
        girl.status -= 1;
      }
    }
  });
};



module.exports = statusCalcular;
