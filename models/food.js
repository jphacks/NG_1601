var mongoose = require('mongoose');

var FoodSchema = mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  calorie: {
    type: Number
  }
});

var Food = module.exports = mongoose.model('Food', FoodSchema);
