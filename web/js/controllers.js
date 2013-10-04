'use strict';

/* Controllers */

function SheltersCtrl($scope, $http) {

  $http.get('shelters').success(function(data) {
    $scope.shelters = data;
  });
}
