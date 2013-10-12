var mongoose = require('mongoose')
  , config = require('../../config/config')
  , Schema = mongoose.Schema;


/**
 * Shelter Schema
 */
var ShelterSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true
  }
});

/**
 * Validations
 */
ShelterSchema.path('name').validate(function(name) {
  return name.length;
}, 'Name cannot be blank');

mongoose.model('Shelter', ShelterSchema);
