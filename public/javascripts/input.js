

function init(){
  $.ajax({
    type: 'GET',
    url: '/apis/get/rest_calorie',
    dataType: 'json',
    success: function(response){

      // 仮置き
     var calorie = response.rest_calorie;
     var _date = new Date();
     var _month = _date.getMonth() + 1;
     var _day = _date.getDate();
     var date = _month+"月"+_day+"日";
     var title = "猫やせ";

      document.getElementById('calorie').innerHTML = "残り" + calorie + "calorie";
      document.getElementById('title').innerHTML = title;
      document.getElementById('date').innerHTML = date;
      },
      error: function(response){
          return response;
       }
   });
}
console.log('a');
init();
