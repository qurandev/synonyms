'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/A1', {templateUrl: 'content/A/A1.html', controller: synonymsController});
    $routeProvider.when('/A2', {templateUrl: 'content/A/A2.html', controller: synonymsController});
    $routeProvider.when('/A3', {templateUrl: 'content/A/A3.html', controller: synonymsController});
	
	$routeProvider.when('/:primaryNav',{ // /:secondaryNav', {
            templateUrl: 'content/urlrouter.html', //'resources/angular/templates/nav/urlRouter.html',
            controller: 'RouteController'
        });
		
    $routeProvider.otherwise({redirectTo: '/A1'});
  }]);
  
  
  function RouteController($scope, $routeParams) {
		var path = '', number='', hash = $routeParams.primaryNav;
		if(hash){
			var arr = hash.match(/\d+$/), arr2 = hash.match(/[^\d]+/);
			if(arr && arr[0]){	number = arr[0]; }
			if(arr2 && arr2[0]){ path = arr2[0]; } console.log(path +' '+ number);
		}
        //$scope.templateUrl = 'resources/angular/templates/nav/'+$routeParams.primaryNav+'/'+$routeParams.secondaryNav+'.html';
		$scope.templateUrl = 'content/' + path + '/'+$routeParams.primaryNav+ '.html'; // /*'/'+$routeParams.secondaryNav */ '.html';
		setTimeout("urlCheck('" + $scope.templateUrl + "', '" + hash + "')", 0);
    }
	
	var urlCheck = function( url, hash ){console.log('urlCheck ' + url + ' '+ hash);
		var synonym = _.find(SYNONYMS, function(o){return o.id == hash;}); //#page/n$PAGE/mode/2up
		var _URL = "http://archive.org/stream/Mutaradifaat-ul-Quran_314/Mutaradifaat-ul-Quran", _PREFIX = "?ui=embed#mode/2up/page/n$PAGE", pageno = 83;
		if(synonym && synonym.pg && parseInt(synonym.pg) ){ pageno = 17 + parseInt(synonym.pg); }
		_URL = _URL + _PREFIX.replace(/\$PAGE/g, pageno);
		$.ajax({
			type: 'HEAD',
			url: url, //'content/A/A1.html',
		success: function() {
				console.log('urlCheck success');// page exists
				$('#banner').slideUp();
		},
		error: function() {
				console.log('urlCheck error');// page does not exist
				$('#banner').slideUp();
				$('#ng-view').html( '<img id="banner-message" src="img/quransynonyms-banner.jpg"/><BR/><HR><H4>We apologize. This Article hasn\'t been translated just yet.</H4> Please check back later or volunteer as a translator by <A HREF=mailto:linguisticmiracle@gmail.com>Contacting  us</A>..<HR>' +
				'<IFRAME SRC="' + _URL + '" STYLE=height:680px;width:95%;></IFRAME>');
		}
		});
		
	}
  
  
  app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        if(input) return input.slice(start);
    }
});