var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

module.exports.Schema = new Schema({
  shelter: {
    type: Schema.Types.ObjectId,
    ref: 'Shelter'
  },
  identifier: {
    type: String,
    trim: true,
    required: true
  },
  species: {
    type: String,
    enum: ['dog', 'cat', 'rhino'],
    required: true
  },
  date_of_birth: {
    type: Date
  },
  breeds: {
    type: Array
  },
  sex: {
    type: String,
    enum: ['male', 'female']
  },
  about:{
    type: String,
    trim: true
  },
  appearance: {
    colors: {
      type: Array
    },
    markings:{
      type: Array
    },
    description:{
      type: String,
      trim: true
    }
  },
  medical: {
    sterilized: {
      type: Boolean
    },
    vaccinations:{
      type: Array
    }
  }
});
