'use strict';


// Declare app level module which depends on filters, and services
angular.module('sheltersApp', [
  'ngResource', 
  'sheltersApp.filters',
  'sheltersApp.directives', 
  'sheltersApp.controllers',
  'sheltersApp.services'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/shelters', {
      templateUrl: 'web/partials/shelters/list.html', 
      controller: 'SheltersCtrl'
    });
    $routeProvider.otherwise({
      redirectTo: '/shelters'
    });
  }]);
