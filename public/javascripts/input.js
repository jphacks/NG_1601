

function init(){
  $.ajax({
    type: 'GET',
    url: ''
    dataType: 'jsonp',
    success: function(response){

      // 仮置き
     var calorie = 30;
     var _date = new Date();
     var _month = _date.getMonth() + 1;
     var _day = _date.getDay();
     var date = _month+"月"+_day+"日";
     var title = "タイトル";

      document.getElementById('calorie').innerHTML = "残り" + calorie + "calorie";
      document.getElementById('title').innerHTML = title;
      document.getElementById('date').innerHTML = date;
      },
      error: function(response){
          return response;
       }
   });
}
