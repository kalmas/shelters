var mongoose = require('mongoose'),
	Shelter = mongoose.model('Shelter');

exports.all = function(req, res){
	console.log(req);
	Shelter.find().sort('-created').exec(function(err, articles){
		if (err) {
            		res.render('error', {
                		status: 500
            		});
        	} else {
            		res.json(articles);
        	}
	});
};

exports.create = function(req, res){
	var shelter = new Shelter(req.body);
	shelter.save(function(err){
		if(err){
			return res.send(500, err);		
		}
		return res.json(shelter);
	});
};
