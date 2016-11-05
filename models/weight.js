var mongoose = require('mongoose');

var WeightSchema = mongoose.Schema({
  user_id: {
    type: Number
  },
  weight: {
    type: Number
  },
  date: {
    type: Date
  }
});

var Weight = module.exports = mongoose.model('Weight', WeightSchema);
