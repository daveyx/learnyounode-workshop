var fs = require('fs');
var path = require('path');

module.exports = 
    function (dir, fileExt, callback) {
        //console.log(dir + " - " + fileExt);
        var folder = dir;
        fs.readdir(folder, function (err, files) {
          if (err) {
              return callback(err);
          } // early return
          
        var filteredFiles = [];
        files.forEach(function (file) {
            if (path.extname(file) === "." + fileExt) {
              filteredFiles.push(file);
            }
          });

          return callback(null, filteredFiles);
        });
    };
    
/* official solution:
    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }


*/


/* multiple named functions in module
module.exports = {
    filteredList: function (dir, fileExt, callback) {
        console.log("module called");
        callback(dir + " - " + fileExt);
    },
    peter: function() {
        console.log("peter called");
    }
};
*/