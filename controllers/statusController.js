var statusController = function($scope, $route, $routeParams, $location, $http){console.log('statusController ' + JSON.stringify($routeParams));

	var lookup = function(letter){
		var pgStart, pgCount, o, ret = {};
		ret.l = letter;

		o = _.where(SYNONYMS_INDEX, {l: letter}); //console.log( JSON.stringify(o) );
		assert(o && o.length > 0, "lookup pgStart "+letter);
		pgStart = o[0].pg;
		ret.pg = parseInt( pgStart ); //console.log( letter + " pgStart " + pgStart );

		pgCount = _.reduce(pageOffsets[ letter ], function(a,b){return (a||0) + (b||0); }, 0);
		assert(pgCount && pgCount > 0, "lookup pgCount "+letter);
		ret.pgEnd = ret.pg + pgCount;
		ret.pgCount = ++pgCount;
		return ret;
	}

	var _log = function(o){
		console.log( JSON.stringify(o) + "\n\n" );
	}

	var assert = function(pred, prefix){ 
		prefix = prefix || "";
		if(!pred){
			console.log(prefix +" Assert failed! ***********"); //debugger;
		}
	}

	var findApproxPageNo = function(id, offset){
		var pageno, _html='', page_offset=0; if(!offset) offset = 0;
		var sectionAlphabet = id && id.match( /[^\d]*/ ), sectionNumber = id && id.match( /\d+/g );
		var sectionAlphabetObj = sectionAlphabet && _.find( SYNONYMS_INDEX, function(o){ return o.l == sectionAlphabet; }); 
		if(sectionAlphabetObj && parseInt(sectionAlphabetObj.pg)){ 
			pageno = parseInt(sectionAlphabetObj.pg); 
			_html = '<div class="alert alert-error"><B>Showing first page of section for this topic. Use page navigation buttons below to find topic.</B></div>' 
		}
		else{ _html = '<div class="alert alert-error"><B>Page number not yet available. Showing default page.</B></div>'; }
		try{
			if(pageOffsets[sectionAlphabet] && pageOffsets[sectionAlphabet].length >= sectionNumber ){ 
				page_offset = _.reduce(pageOffsets[sectionAlphabet].slice(0, sectionNumber), function(memo, num){ return memo + num; }, 0); //parseInt( pageOffsets[sectionAlphabet][sectionNumber-1] );
				_html = '';
			}
		}catch(e){debugger;}
		return {id: id,
				pg: pageno + offset + page_offset, 
				pgEnd: pageno + offset + page_offset + (pageOffsets[sectionAlphabet][sectionNumber] || 0), 
				l: (pageOffsets[sectionAlphabet][sectionNumber] || 0),
				html: _html};
	}


	var pageStatus = {}, letterStatus = {
		'A': "1-29",
		'AA': "1-51",
		'b': "1-37 46-80",
		'p': "2 6-19 47-59",
		't': "1 15 21",
		'tt': "3 4",
		'th': "",
		'j': "4 28",
		'ch': "22-26",
		'HA': "",
		'kh': "19-21",
		'd': "1-3 16-24 30",
		'dd': "3-9",
		'dh': "1-6",
		'r': "1-6 14-21",
		'z': "1-5",
		's': "3-27",
		'sh': "",
		'SA': "",
		'DA': "",
		'TA': "",
		'ZA': "1 2",
		'E': "1-6",
		'gh': "",
		'f': "2-14",
		'q': "1-18",
		'k': "1-19 34 35 39-45",
		'gg': "1-27",
		'l': "1-4 7 13",
		'm': "18 33 34",
		'n': "14 28",
		'w': "1 2",
		'h': "4 17",
		'y': "" /*,
		'appendix1': [905,9,1,1,1, 1,3,4,3,1, 2,4,2,1,1],
		'appendix2': [940,3,3,9,7, 1,1,1],
		'appendix3': [966,6,6,4],
		'appendix4': [983,7],
		'appendix5': [991,3,2,1,2, 2,3,3,1,]*/
	}

	var getStatus = function(){
		var o = {}, oo = {}, pageStatus = {}, regexp = /(\d+)\-(\d+)/;
		$.each( letterStatus, function(l, data){
			var arr = [], arrPg = [], pgPrevious, pgLast, oPgLookup, oPgEndLookup, oPgLetterLookup, nDataParts, pgLetterFirst, pgLetterLast;
			if(l){ 
				oPgLetterLookup = lookup( l );
				pgLetterFirst = oPgLetterLookup.pg; pgLetterLast = oPgLetterLookup.pgEnd;
				nDataParts = data.split(' ') && data.split(' ').length; 
			}
			$.each( data.split(' '), function(i, d){
				var isPgRange, start, end, pgStart, pgEnd;
				isPgRange = regexp.test(d);
				if(d && !isPgRange && parseInt(d)){
					start = end = parseInt(d);
					oPgLookup = oPgEndLookup = findApproxPageNo(l + d);
				}else if(d && isPgRange){
					var matches = d.match( regexp );
					if(matches && (start=parseInt(matches[1])) && (end=parseInt(matches[2])) ){
						oPgLookup = findApproxPageNo(l + start);
						oPgEndLookup = findApproxPageNo(l + end);
					}
				}else if(!d){ //this processes empty letters.
					pageStatus[l] = "(" + pgLetterFirst + "-" + pgLetterLast + ")";
					return;
				}
				pgStart = oPgLookup.pg; pgEnd = oPgEndLookup.pgEnd;
				//_log( {l: l, d: d, start: start, end: end, pgStart: pgStart, pgEnd: pgEnd} );
				arr = arr.concat( _.range(start, end+1) ); //push all the topic indexes.
				arrPg = arrPg.concat( _.range(pgStart, pgEnd+1) );
				pageStatus[l] = (pageStatus[l] || "");
				
				//At beginning: any missed pages?
				if(i == 0 && pgLetterFirst < pgStart){
					pageStatus[l] += "(" + pgLetterFirst + "-" + (-1+pgStart) + ") ";
				}
				//in middle: any missed pages?
				if( pgPrevious && pgPrevious < pgStart ){ //append missing pages, in brackets
					pageStatus[l] += "(" + (1+pgPrevious) + "-" + (-1+pgStart) + ") ";
				}
				pageStatus[l] += pgStart + "-" + pgEnd;
				//in end: any missed pages?
				if(i >= (-1+nDataParts)){
					if(pgLetterLast > pgEnd)
						pageStatus[l] += " (" + (1+pgEnd) + "-" + pgLetterLast + ")";
				}else{ pageStatus[l] += " "; }
				//All done. store last page processed in this iteration.
				pgPrevious = pgEnd;			
				o[l] = arr;
				oo[l] = arrPg;
			});
		});
		_log( o );_log( oo );_log( pageStatus ); 
		return pageStatus;
	}
	
	$scope.getRange = function(data){
		var ret = {}, regexp = /(\d+)\-(\d+)/, start, end, matches;
		matches = data.match( regexp );
		if(matches && (start=parseInt(matches[1])) && (end=parseInt(matches[2])) ){
			ret.data = _.range(start, end+1);
		}
		ret.isDone = (data.indexOf('(') == -1);
		return ret;
	}
	$scope.pageStatus = getStatus();
	$scope.letters = _.map(SYNONYMS_INDEX, function(o){ return o.l; });
	$scope.lettersLong = _.map(SYNONYMS_INDEX, function(o){ return o.ll; });
/*	$scope.roots = _.without( _.uniq(_.map(SYNONYMS_DETAILS, function(o){ return o.root; }) ), undefined );
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

	$scope.roots = $scope.getRoots();*/
}
