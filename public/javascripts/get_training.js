$(function(){

  getTraiging()

  function getTraiging() {
      $.ajax(
          '/get/traning',
          {
              type: 'get',
          });
      return false;
  }

});
