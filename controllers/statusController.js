var statusController = function($scope, $route, $routeParams, $location, $http, $rootScope){console.log('statusController ' + JSON.stringify($routeParams));

	$rootScope.lookup = function(letter){
		var pgStart, pgCount, o, ret = {};
		ret.l = letter;

		o = _.where(SYNONYMS_INDEX, {l: letter}); //console.log( JSON.stringify(o) );
		$rootScope.assert(o && o.length > 0, "lookup pgStart "+letter);
		pgStart = o[0].pg;
		ret.n = o[0].n; ret.d = o[0].d;
		ret.pg = parseInt( pgStart ); //console.log( letter + " pgStart " + pgStart );

		pgCount = _.reduce(pageOffsets[ letter ], function(a,b){return (a||0) + (b||0); }, 0);
		$rootScope.assert(pgCount && pgCount > 0, "lookup pgCount "+letter);
		ret.pgEnd = ret.pg + pgCount;
		ret.pgCount = ++pgCount;
		return ret;
	}

	$rootScope._log = function(o){
		console.log( JSON.stringify(o) + "\n\n" );
	}

	$rootScope.assert = function(pred, prefix){ 
		prefix = prefix || "";
		if(!pred){
			console.log(prefix +" Assert failed! ***********"); //debugger;
		}
	}
	
	$rootScope.findLetterEntryFromPage = findLetterEntryFromPage;
	$rootScope.findApproxPageNo = findApproxPageNo;


	$rootScope.pageStatus = {};
	
	$rootScope.whatsNew = {
		'Jan 22, 2013': {'n': "29-33", 'w': "3 4", 'h': "1 2 6-16", 'b': "39-44", 'p': "4 5"},
		'Jan 14, 2013': {'HA': "5-15"},
		'Jan 12, 2013': {'l': "13-17", 'm': "1-48", 'n': "1-26", 'ch': "18-20"},
		'Jan 11, 2013': {'j': "5-26", 'p': "30-32", 'ch': "1-8"},
		'Jan 9, 2013':  {'p': "26-30"}
	};
	
	$rootScope.letterStatus = {
		'A': "1-29",
		'AA': "1-51",
		'b': "1-37 39-44 46-80",
		'p': "1 2 4-20 22-32 36-46 47-59",
		't': "1-8 15 18-27",
		'tt': "2-8",
		'th': "1 2",
		'j': "1-28",
		'ch': "1-29",
		'HA': "1-15",
		'kh': "19-21",
		'd': "1-3 16-24 30 34",
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
		'E': "1-9",
		'gh': "3-9",
		'f': "1-14",
		'q': "1-18",
		'k': "1-18 19-38 39-45",
		'gg': "1-27",
		'l': "1-4 7 13-17",
		'm': "1-48",
		'n': "1-26 28-33",
		'w': "1-4",
		'h': "1 2 4 6-17",
		'y': "" /*,
		'appendix1': [905,9,1,1,1, 1,3,4,3,1, 2,4,2,1,1],
		'appendix2': [940,3,3,9,7, 1,1,1],
		'appendix3': [966,6,6,4],
		'appendix4': [983,7],
		'appendix5': [991,3,2,1,2, 2,3,3,1,]*/
	}

	$rootScope.totalDone = function(){
		var o = {};
		o.done  = _.reduce( _.map($rootScope.topicsStatus, function(o){return parseInt( o.done );}), function(a,b){return a+b;});
		o.total = _.reduce( _.map($rootScope.topicsStatus, function(o){return parseInt( o.total );}), function(a,b){return a+b;});
		o.percent = (100*o.done/o.total).toFixed();
		o.donePg  = _.reduce( _.map($rootScope.topicsStatus, function(o){return parseInt( o.donePg );}), function(a,b){return a+b;});
		o.totalPg = _.reduce( _.map($rootScope.topicsStatus, function(o){return parseInt( o.totalPg );}), function(a,b){return a+b;});
		o.percentPg = (100*o.donePg/o.totalPg).toFixed();		
		$rootScope.mStatus = o;
		return o;
	}

	var getStatus = function(){
		var o = {}, pageStatus = {}, regexp = /(\d+)\-(\d+)/;
		$.each( $rootScope.letterStatus, function(l, data){
			var arr = [], arrPg = [], pgPrevious, pgLast, oPgLookup, oPgEndLookup, oPgLetterLookup, nDataParts, pgLetterFirst, pgLetterLast, nEntries=0, nEntriesDone=0, nPages=0;
			if(l){ 
				oPgLetterLookup = $rootScope.lookup( l );
				nEntries = oPgLetterLookup.n; nEntriesDone = oPgLetterLookup.d;
				pgLetterFirst = oPgLetterLookup.pg; pgLetterLast = oPgLetterLookup.pgEnd; nPages = oPgLetterLookup.pgCount;
				nDataParts = data.split(' ') && data.split(' ').length; 
			}
			$.each( data.split(' '), function(i, d){
				var isPgRange, start, end, pgStart, pgEnd;
				isPgRange = regexp.test(d);
				if(d && !isPgRange && parseInt(d)){
					start = end = parseInt(d);
					oPgLookup = oPgEndLookup = $rootScope.findApproxPageNo(l + d);
				}else if(d && isPgRange){
					var matches = d.match( regexp );
					if(matches && (start=parseInt(matches[1])) && (end=parseInt(matches[2])) ){
						oPgLookup = $rootScope.findApproxPageNo(l + start);
						oPgEndLookup = $rootScope.findApproxPageNo(l + end);
					}
				}else if(!d){ //this processes empty letters.
					$rootScope.pageStatus[l] = "(" + pgLetterFirst + "-" + pgLetterLast + ")";
					o[l] = {data: data, done: arr.length, total: nEntries, d: nEntriesDone,  donePg: arrPg.length, totalPg: nPages};
					return;
				}
				pgStart = oPgLookup.pg; pgEnd = oPgEndLookup.pgEnd;
				//_log( {l: l, d: d, start: start, end: end, pgStart: pgStart, pgEnd: pgEnd} );
				arr = arr.concat( _.range(start, end+1) ); //push all the topic indexes.
				arrPg = arrPg.concat( _.range(pgStart, pgEnd+1) );
				$rootScope.pageStatus[l] = ($rootScope.pageStatus[l] || "");
				
				//At beginning: any missed pages?
				if(i == 0 && pgLetterFirst < pgStart){
					$rootScope.pageStatus[l] += "(" + pgLetterFirst + "-" + (-1+pgStart) + ") ";
				}
				//in middle: any missed pages?
				if( pgPrevious && pgPrevious < pgStart ){ //append missing pages, in brackets
					$rootScope.pageStatus[l] += "(" + (1+pgPrevious) + "-" + (-1+pgStart) + ") ";
				}
				$rootScope.pageStatus[l] += pgStart + "-" + pgEnd;
				//in end: any missed pages?
				if(i >= (-1+nDataParts)){
					if(pgLetterLast > pgEnd)
						$rootScope.pageStatus[l] += " (" + (1+pgEnd) + "-" + pgLetterLast + ")";
				}else{ $rootScope.pageStatus[l] += " "; }
				arr = arr || []; arrPg = arrPg || [];
				//All done. store last page processed in this iteration.
				pgPrevious = pgEnd;
				o[l] = {data: data, 
						done: arr.length, 	  total: nEntries, d: nEntriesDone,  
						donePg: arrPg.length, totalPg: nPages,
						/*arr: arr, arrPg: arrPg*/};
			});
		});
		$rootScope._log( o );$rootScope._log( $rootScope.pageStatus ); 
		$rootScope.topicsStatus = o;
		$rootScope.totalDone();
		return $rootScope.pageStatus;
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

	$scope.click = function(o){		$rootScope._log(o);
		var pg = o.pg, letter = o.l, pgLetterStart, oLookup, id;
		//id = $rootScope.findLetterEntryFromPage( pg ); console.log( id );
		location.href = '#/page/' + pg; //id;
	}
	//$scope.mouseover = function(o){
	//	_log(o);
	//}	
}


	var findLetterEntryFromPage = function(pageToFind){
	  var match = -2, oLetterLookup, offsets, letter, index, maxEntry; 
	  _.find(SYNONYMS_INDEX, function(o, key, list){
		  ++match; return parseInt(o.pg) > pageToFind; 
		}, match); 
	  if(match < 0){ return; } //invalid?
	  oLetterLookup = SYNONYMS_INDEX[match];
	  letter = oLetterLookup.l;
	  maxEntry = oLetterLookup.n;
	  //console.log( JSON.stringify(oLetterLookup) );
	  if((findApproxPageNo(letter + 1) ).pg == pageToFind) return letter + 1;
	  index = 1;
	  for(; (findApproxPageNo(letter + index) ).pg <= pageToFind && index <= maxEntry; ++index){
	  }
	  if(index-1 <= 0) return letter + 1;
	  return ( letter + (index-1) );
	}
	
	var findApproxPageNo = function(id, offset){
		var pageno, _html='', page_offset=0, section_offset=0; if(!offset) offset = 0;
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
		if(pageOffsets[sectionAlphabet] && pageOffsets[sectionAlphabet].length > sectionNumber){
			section_offset = (pageOffsets[sectionAlphabet][sectionNumber]) || 0;
		}
		return {id: id,
				pg: pageno + offset + page_offset, 
				pgEnd: pageno + offset + page_offset + section_offset, 
				l: (pageOffsets[sectionAlphabet][sectionNumber] || 0),
				html: _html};
	}
