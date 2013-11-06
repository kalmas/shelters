'use strict';

var filters = angular.module('sheltersApp.filters', []);
filters.filter('checkmark', function() {
  return function(input) {
  console.log(input);
    return input ? '\u2713' : '\u2718';
  };
});
