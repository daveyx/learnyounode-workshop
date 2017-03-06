

// -----------------------------------------------------------------------------

/* FILTERED LS
var fs = require('fs');
var dir = process.argv[2];
var filter = "." + process.argv[3];

fs.readdir(dir, function(err, list) {
    if (err) {
        throw err;
    }
    
    for (var i = 0; i < list.length; i++) {
        if (list[i].endsWith(filter)) {
            console.log(list[i]);
        }
    }
});
*/
/* official solution:
   var fs = require('fs')
    var path = require('path')
    
    var folder = process.argv[2]
    var ext = '.' + process.argv[3]
    
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/

// -----------------------------------------------------------------------------

/* async read
var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
    if (err) {
        throw err;
    }
    var str = data.toString();
    var stt = str.split('\n');
    console.log(stt.length-1);
});
*/

/* sync read
var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var stt = str.split('\n');
console.log(stt.length-1);
*/

/* program arguments as sum of Number()
console.log(process.argv.length);
console.log(process.argv);
var sum = 0;
for (i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}
console.log(sum);
*/

//console.log("HELLO WORLD");