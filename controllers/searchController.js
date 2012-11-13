var searchController = function($scope, $route, $routeParams, $location, $http){console.log('searchController ' + JSON.stringify($routeParams));
	$scope.roots = _.without( _.uniq(_.map(SYNONYMS_DETAILS, function(o){ return o.root; }) ), undefined );
	$scope.EnToAr = EnToAr;
	
	$scope.getRoots = function(){
		return _.chain(SYNONYMS_DETAILS)
				.map(function(sd){ return sd.root; })
				.uniq()
				.value();
	}
	
	$scope.mapTopicToRoots = function(topicID){
		return _.chain(SYNONYMS_DETAILS)
		 .filter(function(sd){ return sd.id == topicID; })
		 .map(function(sd){ return sd.root; })
		 .uniq()
		 .value();
	}
	
	$scope.mapRootToTopics = function(root){
		return _.chain(SYNONYMS_DETAILS)
		 .filter(function(sd){ return sd.root == root; })
		 .map(function(sd){ return sd.id; })
		 .uniq()
		 .map(function(id){ 
			  return _.find( SYNONYMS, function(s){ return s.id == id })
		  })
		 .map(function(s){ return s.topic; })
		 .value();
	}

	$scope.roots = $scope.getRoots();
}
