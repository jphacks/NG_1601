var list = function() {

  var food_list = [];
  var training_list = [];
  var food_obj = "<ul style='list-style:none;'>";
  var training_obj = "<ul style='list-style:none;'>";
  var test_food_data = ["かつどぅん", "てんどぅん", "ぎゅうどぅん"];
  var test_training_data = ["背筋20回","スクワット20回","ドラゴンフラッグ5回"];

  function init() {
    $.get('/apis/get/user_food', function(user_food_data) {
      $.get('/apis/get/user_training', function(user_training_data) {
        
     food_list = user_food_data;
     training_list = user_training_data;

    for(var i = 0; i < test_food_data.length; i++){
     food_obj += "<li id='food" + i + "'>" + test_food_data[i] + "<br><input id='" + i + "' type='submit' class='submit_button' value='×' onclick='food_delete(this.id)'></li>";
    }

    for(var i = 0; i < test_training_data.length; i++){
      training_obj += "<li>" + test_training_data[i] + "<br><input type='submit' class='submit_button' onclick='load()' value='やった'></li>"
    }
  
    food_obj += "</ul>";
    training_obj += "</ul>";

    document.getElementById("food_list").innerHTML = food_obj;
    document.getElementById("muscle_training_list").innerHTML = training_obj;

      });
    });
  }

  return {
    init: init
  };
};

_list = list();

_list.init();
