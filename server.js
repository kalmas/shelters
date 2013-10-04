/**
 * Module dependencies.
 */
var express = require('express'),
	fs = require('fs'),
	mongoose = require('mongoose');	

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	config = require('./config/config'),
	db = mongoose.connect(config.db);

//Bootstrap models
var models_path = __dirname + '/app/models';
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
walk(models_path);

var server = express();

// Configure express
require('./config/express')(server);

// Bootstrap routes
require('./config/routes')(server);

var port = config.port;
server.listen(port, function(){
  console.log('Listening on ' + config.port);
});

exports = module.exports = server;

