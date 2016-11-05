var girl_canvas = function() {
  var _element = document.getElementById('girl');
  var _parentElement = _element.parentNode;
  var ctx = _element.getContext('2d');
  _element.width = _parentElement.clientWidth;
  _element.height = _parentElement.clientHeight;

  var current_expression = 'normal';
  var girlImages = {};
  var hukidashi;
  var texts = [
    'ダイエット頑張りましょう！',
    '私もやせてきました',
    'おなかすきましたぁ',
  ];

  var isFired = false;

  function init() {
    // ctx.drawImage('./images/girl/1_smile.png', 0, 0);
    // var image = new Image();
    // image.src = '../images/girl/1_smile.png';
    // image.onload = function(e) {
    //   console.log(image.width);
    //   console.log(image.height);
    //   ctx.drawImage(image, (_element.width-image.width*0.5)*0.5, (_element.height-image.height*0.5)*0.5, image.width*0.5, image.height*0.5);
    // };
    $.get('/apis/get/girl', function(data) {

      data = data[0];
      console.log(data);
      girlImages.normal = new Image();
      girlImages.question = new Image();
      girlImages.scornful = new Image();
      girlImages.smile  = new Image();
      hukidashi  = new Image();

      girlImages.normal.src = '../images/girl/'+data['status']+'_normal.png';
      girlImages.question.src = '../images/girl/'+data['status']+'_question.png';
      girlImages.scornful.src = '../images/girl/'+data['status']+'_scornful.png';
      girlImages.smile.src = '../images/girl/'+data['status']+'_smile.png';
      hukidashi.src = '../images/background/hukidashi.png';

      girlImages.normal.onload = function(e) {
        refresh_expression();
      };
    });
    setTouchEventOnCanvas();
  }

  function refresh_expression() {
    isFired = false;
    var image = girlImages[current_expression];
    ctx.font = 'italic 400 30px/2 Unknown Font, sans-serif';
    ctx.clearRect(0, 0, _element.width, _element.height);
    ctx.drawImage(image, (_element.width-image.width*0.5)*0.5, (_element.height-image.height*0.5)*0.5, image.width*0.5, image.height*0.5)
    setTimeout(refresh_expression,5000);
  }


  function speak() {
    ctx.drawImage(hukidashi, _element.width*0.5-hukidashi.width*0.5*4, _element.height*0.6, hukidashi.width*4, hukidashi.height*4);
    var text = texts[1];
    ctx.textAlign = 'center';
    ctx.fillText(text, _element.width*0.5, _element.height*0.8);
  }

  function setTouchEventOnCanvas() {
    _element.addEventListener('click', function(e) {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      if(x<_element.width * 0.2 && y < _element.height) {

      } else if(!isFired){
        isFired = true;
        speak();
      }
    });
  }
  return {
    init: init
  };
}

var hoge = girl_canvas();
hoge.init();
