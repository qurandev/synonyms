// Return array of string values, or NULL if CSV string not well formed.
function CSVtoArray(text) { //from http://stackoverflow.com/questions/8493195/how-can-i-parse-a-csv-string-with-javascript
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) return null;
    var a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
        function(m0, m1, m2, m3) {
            // Remove backslash from \' in single quoted values.
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            // Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
};


var DATA;
$.get('data\\synonymsEx.csv',function(data){if(!data) return; DATA=data;
   var csv='USE Quran\n\
DELETE FROM Synonyms\n\
INSERT INTO Synonyms (id, topic, topicUr, page) VALUES \n\
', lines=data.split('\n'); //console.log(lines);
   _.each(lines, function(line, index){if(!line) return;
       csv += '(\'' + CSVtoArray( line ).join('\', N\'') + '\'),\n';
   })
   //delete the last comma
   csv = csv.substring(0,csv.length-2);
   console.log(csv);
});