var list = function() {

  function init() {
    $.get('/apis/get/user_food', function(user_food_data) {
      $.get('/apis/get/user_training', function(user_training_data) {
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
