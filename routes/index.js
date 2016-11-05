var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addNewUser', function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/')
    }
  });
});

module.exports = router;
