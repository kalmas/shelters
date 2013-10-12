'use strict';

angular.module('sheltersApp.services', []).
  factory("Shelters", ['$resource', function($resource) {
    
    return $resource('shelters/:shelterId', {
      shelterId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
    
}]);
