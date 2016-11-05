var ar_canvas = function() {
  var _element = document.getElementById('ar_canvas');
  var _parentElement = _element.parentNode;
  var ctx = _element.getContext('2d');
  _element.width = _parentElement.clientWidth;
  _element.height = _parentElement.clientHeight;
  var map;
  // var tresure;
  var current_position = {};
  var tresure_positions= [];
  var area_size = 50;
  var muscle_point;


  function init() {
    $.get('/apis/get/user', function(data) {
      // current_position.x = data.current_position.x;
      // current_position.y = data.current_position.y;
      // tresure_positions = data.tresure_positions;
      current_position.x = 5;
      current_position.y = 4;
      tresure_positions = [
        {
          x: 0,
          y: 6
        },
        {
          x: 4,
          y: 5
        },
      ]
      // muscle_point = data.muscle_point;
      muscle_point = 5;

      map= new Image();
      map.src='../images/background/map.png';
      map.addEventListener('load', refresh_map);
    });
  }

  function refresh_map() {
    ctx.drawImage(map, (_element.width-map.width)*0.5, (_element.height-map.height)*0.5);
    ctx.lineWidth = 1;
    for(var i=0; i*area_size< _element.width; i++ ) {

      ctx.beginPath();
      ctx.moveTo(i*area_size, 0);
      ctx.lineTo(i*area_size, _element.height);
      ctx.stroke();
    }

    for(var i=0; i*area_size< _element.height; i++ ) {
      ctx.beginPath();
      ctx.moveTo(0, i*area_size);
      ctx.lineTo(_element.width, i*area_size);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.font = 'italic 400 18px/2 Unknown Font, sans-serif';
    ctx.fillText('マッスルポイントの残り'+muscle_point, 50,50);
    ctx.stroke();

    tresure = new Image();
    tresure.src='../images/other/tresure.png';
    tresure.addEventListener('load', function() {
      tresure_positions.forEach(function(p) {
          ctx.drawImage(tresure, p.x*area_size, p.y*area_size, area_size, area_size);
      });
    });
    hito = new Image();
    hito.src='../images/other/hito.png';
    hito.addEventListener('load', function() {
      ctx.drawImage(hito, current_position.x*area_size, current_position.y*area_size, area_size, area_size);
    });
    setTouchEvent();
  }

  function setTouchEvent() {
    _element.addEventListener('click', function(e) {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var newPosition = {};
      newPosition.x =parseInt(x/area_size);
      newPosition.y =parseInt(y/area_size);
      var distance =         Math.abs(newPosition.x - current_position.x) + Math.abs(newPosition.x - current_position.x);
      if(distance < muscle_point) {
        current_position.x = newPosition.x;
        current_position.y = newPosition.y;
        muscle_point -=distance;

        tresure_positions.forEach(function(tresure_position, index) {
          if(current_position.x === tresure_position.x && current_position.y === tresure_position.y) {

            tresure_positions.splice(index, 1);
            $.post('/apis/set_user_food', function(err, data) {
              if(err) {console.log(err);}


              /***************************************************
              ここで良い感じにかつどぅ〜んを出す．コールバックでrefresh_map()
              ***************************************************/
              var don = new Image();
              don.src='../images/food/katsu.png'
              don.addEventListener('load', function(e) {
                ctx.clearRect(0, 0, _element.width, _element.height);
                ctx.drawImage(don, (_element.width-don.width)*0.5, (_element.width-don.width)*0.5, don.width, don.height);
                ctx.textAlign = 'center';
                ctx.font = 'italic 400 30px/2 Unknown Font, sans-serif';
                ctx.fillText('かつどぅ〜ん！！！！！', _element.width*0.5,_element.height*0.8);
                console.log(tresure_positions);
                setTimeout(refresh_map, 3000);
              });
            });

          } else {
            refresh_map();
          }
        });
      }
    });
  }

  return  {
    init: init
  };
};

var _ar_canvas = ar_canvas();
_ar_canvas.init();
