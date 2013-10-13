var mongoose = require('mongoose')
  , Shelter = mongoose.model('Shelter')
  , _ = require('underscore');

/**
 * Find shelter by id
 */
exports.shelter = function(req, res, next, id) {
  Shelter.findOne({ _id: id }, function(err, shelter) {
    if (err) return next(err);
    if (!shelter) return next(new Error('Failed to load article ' + id));
    req.shelter = shelter;
    next();
  });
};

/**
 * Get all shelters
 */
exports.all = function(req, res) {
	Shelter.find().sort('-created').exec(function(err, articles) {
		if(err) {
      return res.send(500, err);
    }
    
    res.json(articles);
	});
};

/**
 * Return one shelter
 */
exports.show = function(req, res) {
  res.json(req.shelter);
};

/**
 * Create a shelter
 */
exports.create = function(req, res) {
	var shelter = new Shelter(req.body);
	shelter.save(function(err) {
		if(err) {
			return res.send(500, err);		
		}
		
		return res.json(shelter);
	});
};

/**
 * Update a shelter
 */
exports.update = function(req, res) {
  var shelter = req.shelter;
  
  shelter = _.extend(shelter, req.body);

  shelter.save(function(err) {
    res.json(shelter);
  });
};

/**
 * Delete an article
 */
exports.remove = function(req, res) {
  var shelter = req.shelter;
  
  shelter.remove(function(err) {
    if(err) {
      res.render('error', {status: 500});
    } else {
      res.json(shelter);
    }
  });
};







