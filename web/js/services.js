'use strict';

var services = angular.module('sheltersApp.services', []);

services.factory("Shelters", ['$resource', function($resource) {

    return $resource('shelters/:shelterId', {
        shelterId: '@_id'
      }, 
      {
        update: {
          method: 'PUT'
        }
      }
    );
    
}]);

services.factory("Animals", ['$resource', function($resource) {

    return $resource('animals/:animalId', {
        animalId: '@_id'
      }, 
      {
        update: {
          method: 'PUT'
        }
      }
    );
    
}]);
