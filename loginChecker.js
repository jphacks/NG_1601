var loginChecker = function(req, res, next) {
  if(req.session.user) {
    console.log('aiueo');
    next();
  } else {
    res.redirect('/login');
  }
}

module.exports  = loginChecker;
