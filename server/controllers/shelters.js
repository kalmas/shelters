var mongoose = require('mongoose')
  , Shelter = mongoose.model('Shelter');

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
  res.jsonp(req.shelter);
};

exports.create = function(req, res) {
	var shelter = new Shelter(req.body);
	shelter.save(function(err) {
		if(err) {
			return res.send(500, err);		
		}
		
		return res.json(shelter);
	});
};
