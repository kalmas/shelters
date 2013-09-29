/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Shelter Schema
 */
var ShelterSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    shelter_name: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Validations
 */
ShelterSchema.path('shelter_name').validate(function(shelter_name) {
    return shelter_name.length;
}, 'Name cannot be blank');


mongoose.model('Shelter', ShelterSchema);
