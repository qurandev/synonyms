'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/A1', {templateUrl: 'content/A/A1.html', controller: synonymsController});
    $routeProvider.when('/A2', {templateUrl: 'content/A/A2.html', controller: synonymsController});
    $routeProvider.when('/A3', {templateUrl: 'content/A/A3.html', controller: synonymsController});
    $routeProvider.when('/A4', {templateUrl: 'content/A/A4.html', controller: synonymsController});
	$routeProvider.when('/A5', {templateUrl: 'content/A/A5.html', controller: synonymsController});
	
	$routeProvider.when('/A6', {templateUrl: 'content/A/A6.html', controller: synonymsController});
	$routeProvider.when('/A7', {templateUrl: 'content/A/A7.html', controller: synonymsController});
	$routeProvider.when('/A8', {templateUrl: 'content/A/A8.html', controller: synonymsController});
	$routeProvider.when('/A9', {templateUrl: 'content/A/A9.html', controller: synonymsController});
	$routeProvider.when('/A10', {templateUrl: 'content/A/A10.html', controller: synonymsController});
	
	$routeProvider.when('/:primaryNav/:secondaryNav', {
            templateUrl: 'content/A/A2.html', //'resources/angular/templates/nav/urlRouter.html',
            controller: 'RouteController'
        });
		
    $routeProvider.otherwise({redirectTo: '/A1'});
  }]);
  
  
  function RouteController($scope, $routeParams) {
        //$scope.templateUrl = 'resources/angular/templates/nav/'+$routeParams.primaryNav+'/'+$routeParams.secondaryNav+'.html';
		$scope.templateUrl = 'content/A/'+$routeParams.primaryNav+ /*'/'+$routeParams.secondaryNav */ '.html';
    }
  
  
  app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        if(input) return input.slice(start);
    }
});