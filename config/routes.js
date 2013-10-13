module.exports = function(server) {
  var shelters = require('../server/controllers/shelters');

	function sayHi(req, res, next) {
    res.send('hey there, ' + req.params.name);
	}

	server.get('/hello/:name', sayHi);

	server.get('/shelters', shelters.all);
	server.get('/shelters/:shelterId', shelters.show);
	server.post('/shelters', shelters.create);
	server.put('/shelters/:shelterId', shelters.update);
	server.del('/shelters/:shelterId', shelters.remove);

  server.param('shelterId', shelters.shelter);
};
