var DATA = [''], _INPUT; //var gq = {};
var _regex = / ?([^\|\n]*)?(?:\|((?:ACT|PASS)\|PCPL))?(?:\|(IMPF|IMPV|PERF))?(?:\|(PASS))?(?:\|(\([IVX]*\)))?(?:\|LEM:([^\|\n]*))?(?:\|ROOT:([^\|\n]*))?(?:\|(.*?))?$/;
_INPUT = gq.MANZIL1;
_.each(_INPUT, function(verse, index){
  if(!verse || index==0)
      return;
  var data = [''], o;
  _.each( _INPUT[index].split('★'), function(item, index){
      if(item){
          o = item.split('⚓')
          if(o && o[2])
              o = o.concat( o[2].match(_regex).slice(1) );
          if(o) data.push ( o );
      }
   });
   DATA.push(data);
});
console.log( JSON.stringify(DATA) );