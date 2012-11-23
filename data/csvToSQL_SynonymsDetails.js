var DATA;
$.get('data\\synonyms_details.csv',function(data){if(!data) return; DATA=data;
   var count=0, csv_prefix='USE Quran\n\
DELETE FROM SynonymsDetails\n\n',
csv_start = 'INSERT INTO SynonymsDetails (id, word, wordEn, root) VALUES \n\
', csv = csv_prefix + csv_start, 
   lines=data.split('\n'); //console.log(lines);
   _.each(lines, function(line, index){if(!line) return; if(++count % 100 == 0) csv = csv.substring(0, csv.length-2) + '\n\n\n'+csv_start;
       csv += '(\'' + CSVtoArray( line ).join('\', N\'') + '\'),\n';
   })
   //delete the last comma
   csv = csv.substring(0,csv.length-2);
   console.log(csv);
});