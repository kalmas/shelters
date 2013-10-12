'use strict';

/* Controllers */

angular.module('sheltersApp.controllers', []).
  controller('SheltersCtrl', ['$scope', 'Shelters', function ($scope, Shelters) {
  
  $scope.find = function(query) {
    Shelters.query(query, function(shelters) {
      $scope.shelters = shelters;
    });
  };
  
}]);
