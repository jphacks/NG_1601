var mongoose = require('mongoose');

var GirlSchema = mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  status: {
    type: Number
  }
});

var girl = module.exports = mongoose.model('Girl', GirlSchema);
