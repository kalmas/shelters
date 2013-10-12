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
      templateUrl: 'web/partials/shelters/list.html'
    });
    $routeProvider.when('/shelters/:shelterId', {
      templateUrl: 'web/partials/shelters/view.html'
    });
    $routeProvider.otherwise({
      redirectTo: '/shelters'
    });
  }]);
