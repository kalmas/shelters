'use strict';

/* Controllers */

angular.module('sheltersApp.controllers', []).
  controller('SheltersCtrl', ['$scope', '$routeParams', 'Shelters', function ($scope, $routeParams, Shelters) {
  
  $scope.find = function(query) {
    Shelters.query(query, function(shelters) {
      $scope.shelters = shelters;
    });
  };
  
  $scope.findOne = function() {
    Shelters.get({
      shelterId: $routeParams.shelterId
    }, function(shelter) {
      $scope.shelter = shelter;
    });
  };
  
}]);
