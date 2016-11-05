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

var Training = module.exports = mongoose.model('Training', TrainingSchema);
