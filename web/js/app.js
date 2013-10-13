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
    $routeProvider.
    when('/shelters', {
      templateUrl: 'web/partials/shelters/list.html'
    }).
    when('/shelters/create', {
      templateUrl: 'web/partials/shelters/create.html'
    }).
    when('/shelters/:shelterId/edit', {
      templateUrl: 'web/partials/shelters/edit.html'
    }).
    when('/shelters/:shelterId', {
      templateUrl: 'web/partials/shelters/view.html'
    }).
    otherwise({
      redirectTo: '/shelters'
    });
  }]);
