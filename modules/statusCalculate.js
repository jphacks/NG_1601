
/*
  仕様：
    ユーザidより，
    ・そのユーザの女の子のステータス
    ・そのユーザの直近5日(五日に満たない場合は取得可能な数まで)の体重
    を取得．
    目標体重を上回っている日が過半数（5日なら3日）なら，その女の子の状態を一段階
    不健康にさせる．
    全ての日が満たされている場合は，女の子の状態を一段階よくする
    最後にcallbackを実行する
*/
var statusCalcular = function(user_id, _callback){
  var Model = require('../model');
  var callback = _callback || function(){};


};

module.exports = statusCalcular;
