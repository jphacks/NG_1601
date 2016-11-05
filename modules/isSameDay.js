var isSameDay = function(date1, date2) {
  var _d1 = date1.split(' ');
  var _d2 = date2.split(' ');
return _d1[0]+_d1[1]+_d1[2]+_d1[3] === _d2[0]+_d2[1]+_d2[2]+_d2[3]
}

module.exports = isSameDay;
