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
    $routeProvider
      // Shelters Routes
      .when('/shelters', {
        templateUrl: 'web/partials/shelters/list.html'
      })
      .when('/shelters/create', {
        templateUrl: 'web/partials/shelters/create.html'
      })
      .when('/shelters/:shelterId/edit', {
        templateUrl: 'web/partials/shelters/edit.html'
      })
      .when('/shelters/:shelterId', {
        templateUrl: 'web/partials/shelters/view.html'
      })
      // Animals Routes
      .when('/animals', {
        templateUrl: 'web/partials/animals/list.html'
      })
      .when('/animals/:animalId', {
        templateUrl: 'web/partials/animals/view.html'
      })
      // Default
      .otherwise({
        redirectTo: '/shelters'
      });
  }]);
