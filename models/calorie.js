var mongoose = require('mongoose');

var TrainingSchema = mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  calorie: {
    type: Number
  }
});

var Calorie = module.exports = mongoose.model('Calorie', CalorieSchema);
