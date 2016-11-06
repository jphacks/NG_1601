var list = function() {

  var food_list = [];
  var training_list = [];

  function init() {
    $.get('/apis/get/user_food', function(user_food_data) {
      $.get('/apis/get/user_training', function(user_training_data) {
        food_list = user_food_data;
        training_list = user_training_data;
        console.log(user_food_data);
        console.log(user_training_data);
      });
    });
  }



  return {
    init: init
  };
};

_list = list();

_list.init();
