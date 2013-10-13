'use strict';

/* Controllers */

angular.module('sheltersApp.controllers', []).
  controller('SheltersCtrl', ['$scope', '$routeParams', '$location', 'Shelters', function ($scope, $routeParams, $location, Shelters) {
  
  $scope.find = function(query) {
    Shelters.query(query, function(shelters) {
      $scope.shelters = shelters;
    });
  };
  
  $scope.findOne = function() {
    Shelters.get({ shelterId: $routeParams.shelterId }
        , function(shelter) {
          $scope.shelter = shelter;
        });
  };
  
  $scope.create = function() {
    var shelter = new Shelters({
      shelter_name: this.shelter_name
    });
    
    shelter.$save(function(res) {
      $location.path('shelters/' + res._id);
    });
    
    this.shelter_name = '';
  };
  
  $scope.update = function() {
    var shelter = $scope.shelter;
    if (!shelter.updated) shelter.updated = [];
    shelter.updated.push(new Date().getTime());

    shelter.$update(function() {
        $location.path('shelters/' + shelter._id);
    });
  };
  
}]);
