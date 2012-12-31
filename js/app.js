'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	//$locationProvider.html5Mode(true);
    //$routeProvider.when('/A1', {templateUrl: 'content/A/A1.html', controller: synonymsController});
	$routeProvider.when('', {
			templateUrl: 'content/urlrouter.html',
			controller: 'synonymsController'
	});
	$routeProvider.when('/index', {
			templateUrl: 'partials/index.html',
			controller: 'indexController'
	});
	$routeProvider.when('/search', {
			templateUrl: 'partials/search.html',
			controller: 'searchController'
	});
	$routeProvider.when('/status', {
			templateUrl: 'partials/status.html',
			controller: 'statusController'
	});
	$routeProvider.when('/:primaryNav', {// '/:secondaryNav', {
            templateUrl: 'content/urlrouter.html',
            controller: 'RouteController'
    });
	$routeProvider.when('/:primaryNav/:mode', {// '/:secondaryNav', {
            templateUrl: 'content/urlrouter.html',
            controller: 'synonymsController'
    });
    //$routeProvider.otherwise({redirectTo: '/A1'});
  }]);
  
  app.filter('prettify', function() {
    return function(input, scope) {
        return input.toString().split('.').join(':');
    }
  });
  
  function RouteController($scope, $routeParams) {console.log('RouteController ' + JSON.stringify($routeParams) );
		var path = '', number='', hash = $routeParams.primaryNav, mode = $routeParams.mode;
		if(hash){
			var arr = hash.match(/\d+$/), arr2 = hash.match(/[^\d]+/);
			if(arr && arr[0]){	number = arr[0]; }
			if(arr2 && arr2[0]){ path = arr2[0]; } console.log(path +' '+ number);
		}
        //$scope.templateUrl = 'resources/angular/templates/nav/'+$routeParams.primaryNav+'/'+$routeParams.secondaryNav+'.html';
		if(number){
			$scope.templateUrl = 'content/' + path + '/'+$routeParams.primaryNav+ '.html';
			$scope.synonymSelected = path + number;
		}else{
			$scope.templateUrl = 'content/' + $routeParams.primaryNav+ '.html';
		}

		$scope.mode = mode;
		var IDs = ['', 'trans', 'book', 'pdf', 'info'];
		if( _.indexOf(IDs, mode) != -1){
			$scope.tab = _.indexOf(IDs, mode);
		}
		setTimeout("urlCheck('" + $scope.templateUrl + "', '" + hash + "')", 0);
    }
	
	var urlCheck = function( url, hash ){console.log('urlCheck ' + url + ' '+ hash);
		$.ajax({
			type: 'HEAD',
			url: url, //'content/A/A1.html',
		success: function() {
				console.log('urlCheck success');// page exists
				$('#banner').delay(7000).slideUp(2500);
		},
		error: function() {
				console.log('urlCheck error');// page does not exist
				$('#banner').slideUp();
				$('#ng-view').html( '<img id="banner-message" src="img/quransynonyms-banner.jpg"/><BR/><HR><H4>We apologize. This Article hasn\'t been translated just yet.</H4> Please check back later or volunteer as a translator by <A HREF=mailto:linguisticmiracle@gmail.com>Contacting  us</A>..<HR>'
				+'You can click the <i class="icon-book"></i>&nbsp;Book tab'
				+' on top to see the original Book pages (in Urdu).' );
		}
		});
		
	}
  
  
  app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        if(input) return input.slice(start);
    }
});