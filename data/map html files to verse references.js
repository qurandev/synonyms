var _html, files = ['A1', 'A2', 'A3', 'A4', 'AA1', 'AA2', 'AA3', 'AA4'];
var htmlProcess = function(html){
  _html = html;
  console.log(html.match(/\d{1,3}\:\d{1,3}/mg));
}
$.each(files, function(index,file){
   var fn = 'content/' + file.replace(/\d/g, '') + '/' + file + '.Html'; console.log(fn); 
   $.get(fn, htmlProcess);
});