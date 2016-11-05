



var hoge = require('./model.js')();
console.log(hoge);
// hoge.save('user', {
//   name: 'hisatoshi',
//   email: 'hisatoshi@toralab.org',
//   password: 'kakikukeko',
//   gender: 1,
//   age: 1
// });


hoge.find('user', {}, {}, function(data) {
  console.log(data);
});
