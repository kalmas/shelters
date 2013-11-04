var mongoose = require('mongoose')
  , Animal = mongoose.model('Animal')
  , Shelter = mongoose.model('Shelter');
  
/**
 * Find animal by id
 */
exports.animal = function(req, res, next, id) {
  Animal.findOne({ _id: id })
    .populate('shelter')
    .exec(function(err, animal) {
      if(err) return next(err);
      if(!animal) return next(new Error('Failed to load animal ' + id));
      req.animal = animal;
      return next();
    });
};

/**
 * Return one animal
 */
exports.show = function(req, res) {
  res.json(req.animal);
};

/**
 * Create a animal
 */
exports.create = function(req, res) {
	var animal = new Animal(req.body);
	animal.save(function(err, animal) {
		if(err) return res.send(500, err);
		Shelter.findByIdAndUpdate(animal.shelter
		    , {$push: {animals: animal._id}}
		    , function(err, shelter) {
		      if(err) return res.send(500, err);
		      console.log(animal);
		      console.log(shelter);
		      return res.json(animal);
		    });
  });
 };

