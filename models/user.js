var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
});

var User = module.exports = mongoose.model('User', UserSchema);
