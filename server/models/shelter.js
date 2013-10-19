var mongoose = require('mongoose')
  , config = require('../../config/config')
  , Schema = mongoose.Schema
  , validate = require('mongoose-validator').validate;

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
  },
  address : {
    street: {
      type: String,
      default: '',
      trim: true
    },
    city: {
      type: String,
      default: '',
      trim: true
    },
    state: {
      type: String,
      default: '',
      trim: true,
      validate: validate('len', 2, 2)
    },
    zip: {
      type: Number
    }
  }
});

/**
 * Validations
 */
ShelterSchema.path('name').validate(function(name) {
  return name.length;
}, 'Name cannot be blank');

mongoose.model('Shelter', ShelterSchema);
