var girl_canvas = function() {
  var _element = document.getElementById('girl');
  var _parentElement = _element.parentNode;
  var ctx = _element.getContext('2d');
  ctx.width = _parentElement.clientWidth;
  ctx.height = _parentElement.clientHeight;

  $.get('/apis/get/girl', function(data) {
    console.log(data);
  });
}

girl_canvas();
