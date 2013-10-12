var express = require('express');

module.exports = function(server){

	server.use(express.bodyParser());
	server.use('/web', express.static(__dirname + '/../web'));

};
