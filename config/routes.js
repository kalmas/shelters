module.exports = function(server){
	function respond(req, res, next){
		console.log(req);
  		res.send('hello ' + req.params.name);
	}

	server.get('/hello/:name', respond);

	var shelters = require('../app/controllers/shelters');
	server.get('/shelters', shelters.all);
	server.post('/shelters', shelters.create)
};
