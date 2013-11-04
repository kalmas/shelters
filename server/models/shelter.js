var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
  
module.exports.Schema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  about: {
    type: String,
    trim: true
  },
  animals: [{
    type: Schema.Types.ObjectId,
    ref: 'Animal'
  }],
  address : {
    street: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    },
    state: {
      type: String,
      trim: true,
      match: /^[A-Z]{2}$/
    },
    zip: {
      type: Number
    }
  }
});
