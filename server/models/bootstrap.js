var mongoose = require('mongoose')
  , AnimalSchema = require('./animal').Schema
  , ShelterSchema = require('./shelter').Schema;

mongoose.model('Shelter', ShelterSchema);
mongoose.model('Animal', AnimalSchema);
