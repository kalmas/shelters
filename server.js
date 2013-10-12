var express = require('express')
	, fs = require('fs')
	, mongoose = require('mongoose')
  , env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'
  ,	config = require('./config/config')
  ,	db = mongoose.connect(config.db)
  , server = express();

//Bootstrap models
var walk = function(path) {
  fs.readdirSync(path).forEach(function(file) {
    var newPath = path + '/' + file;
    var stat = fs.statSync(newPath);
    if (stat.isFile()) {
      if (/(.*)\.(js|coffee)/.test(file)) {
        require(newPath);
      }
    } else if (stat.isDirectory()) {
      walk(newPath);
    }
  });
};
walk(config.modelsPath);


// Configure express
require('./config/express')(server);

// Bootstrap routes
require('./config/routes')(server);

server.listen(config.port, function(){
  console.log('Listening on ' + config.port);
});

exports = module.exports = server;
