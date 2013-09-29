module.exports = function(server){
	function respond(req, res, next){
  		res.send('hello ' + req.params.name);
	}

	server.get('/hello/:name', respond);

	var shelters = require('../app/controllers/shelters');
	server.get('/shelters', shelters.all)
};
