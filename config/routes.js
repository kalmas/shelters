var shelters = require('../server/controllers/shelters')
  , animals = require('../server/controllers/animals');

module.exports = function(server) {

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
  
	server.get('/animals', animals.all);
	server.get('/animals/:animalId', animals.show);
	server.post('/animals', animals.create);
  server.param('animalId', animals.animal);
};
