var inputModule = function(){

 // $.ajax({
 //        type: 'GET',
 //        url: ''
 //        dataType: 'jsonp',
 //        success: function(response){
 //            return response;
 //        },
 //        error: function(response){
 //            return response;
 //     });

   //仮置き
	var calorie = 30;
	var date = "11月5日";
	var title = "タイトル";

	document.getElementById('calorie').innerHTML = "残り" + calorie + "calorie";
	document.getElementById('title').innerHTML = title;
	document.getElementById('date').innerHTML = date;
}