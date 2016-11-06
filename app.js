var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);

var app = express();
// var routes = require('./routes/index');
// var users = require('./routes/users');
var apis = require('./routes/api');



var Model = require('./model.js');


var loginCheck = require('./loginChecker.js');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(session({
  secret: 'secret',
  store: new mongoStore({
    url: 'mongodb://127.0.0.1/session',
    autoRemove: 'interval',
    autoRemoveInterval: 6000
  }),
  cookie: {
    httpOnly: true,
    maxAge: 60 * 60 * 1000
  }
}));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/apis', apis);
//loginCheckをしてメイン画面へ
app.get('/',loginCheck ,function(req, res, next) {
  console.log(req.session);
  res.redirect('/index.html');
});


//新しいユーザの登録
app.post('/addNewUser', function(req, res) {
  Model.save('user', req.body, function() {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/index.html');
    }
  });
});

//ログイン画面より，
//ユーザが居るかどうかの確認
//居たら，メイン画面へ
app.post('/login', function(req, res) {
  var name = req.body.name;
  var password = req.body.password;
  var query = {
    'name': name,
    'password': password
  };
  Model.findOne('user', query, {}, function(data) {
    console.log(data);
    console.log('dataの値');

    if (!data) {
      res.redirect('/login.html');
    } else {
      req.session.user_name = data.name;
      req.session.user_id = data.user_id;
      console.log(req.session);
      res.redirect('/');
    }
  });
});

//ログイン画面を取得
//もちろん，sessionの確認は行わない
app.get('/login', function(req, res) {
  res.redirect('/login.html')
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    // res.render('error', {
    //   message: err.message,
    //   error: err
    // });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
