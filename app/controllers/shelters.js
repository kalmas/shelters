var mongoose = require('mongoose'),
	Shelter = mongoose.model('Shelter');

exports.all = function(req, res){
	Shelter.find().sort('-created').exec(function(err, articles){
		if (err) {
            		res.render('error', {
                		status: 500
            		});
        	} else {
            		res.json(articles);
        	}
	});
}
