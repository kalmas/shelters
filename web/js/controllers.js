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
    Shelters.get({ _id: $routeParams.shelterId }
        , function(shelter) {
          $scope.shelter = shelter;
        });
  };
  
  $scope.create = function() {
    var shelter = new Shelters(this.shelter);
    
    shelter.$save(function(res) {
      $location.path('shelters/' + res._id);
    });
    
    //this.shelter.name = '';
  };
  
  $scope.update = function() {
    var shelter = $scope.shelter;
    if (!shelter.updated) shelter.updated = [];
    shelter.updated.push(new Date().getTime());

    shelter.$update(function() {
        $location.path('shelters/' + shelter._id);
    });
  };
  
  $scope.remove = function(shelter) {
    shelter.$remove(function() {
        for (var i in $scope.shelters) {
          if($scope.shelters[i] == shelter) {
            $scope.shelters.splice(i, 1);
          }
        }          
        $location.path('shelters');
    });
  };
  
}]);
