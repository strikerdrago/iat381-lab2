'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeButtons = [
	    {'label': 'Gotta',
	     'snippet': 'Super Sonic speed'},
	    {'label': 'Go',
	     'snippet': 'Just got faster.'},
	    {'label': 'Fast',
	     'snippet': 'Super Fast'},
	    {'label': 'Faster',
	     'snippet': 'Ultra Fast'},
	    {'label': 'Fastest',
	     'snippet': 'Platinum Fast'}
    ];
  });
