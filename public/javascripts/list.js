var list = function() {

  var food_list = [];
  var training_list = [];
  var food_obj = "<ul style='list-style:none;'>";
  var training_obj = "<ul style='list-style:none;'>";

  function init() {
    // $.get('/apis/get/user_food', function(user_food_data) {
    //   $.get('/apis/get/user_training', function(user_training_data) {
    //
    //  food_list = user_food_data;
    //  training_list = user_training_data;
    //
    // for(var i = 0; i < user_food_data.length; i++){
    //  food_obj += "<li>" + user_food_data[i].food_id + "</li>";
    // }
    //
    // for(var i = 0; i < user_training_data.length; i++){
    //   training_obj += "<li>" + user_training_data[i].training_id + "<button calss='muscle_run'>やる</button></li>"
    // }
    //
    // food_obj += "</ul>";
    // training_obj += "</ul>";
    //
    // document.getElementById("food_list").innerHTML = food_obj;
    // document.getElementById("muscle_training_list").innerHTML = training_obj;
    //   });
    // });
    $.get('/apis/get/food_list', function(d) {
      console.log(d);
    });
  }

  return {
    init: init
  };
};

_list = list();

_list.init();
