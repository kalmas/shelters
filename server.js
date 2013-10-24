var express = require('express')
	, fs = require('fs')
	, mongoose = require('mongoose')
  , env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'
  ,	config = require('./config/config')
  ,	db = mongoose.connect(config.db)
  , server = express();

//Bootstrap models
require(config.modelsPath + '/bootstrap');

// Configure express
require('./config/express')(server);

// Bootstrap routes
require('./config/routes')(server);

server.listen(config.port, function(){
  console.log('Listening on ' + config.port);
});

exports = module.exports = server;
