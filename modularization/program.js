var mymodule = require('./mymodule.js');


mymodule(process.argv[2], process.argv[3], 
    function(err, files) {
        if (err) {
            return console.error(err);
        }
        for (var i = 0; i < files.length; i++) {
            console.log(files[i]);
        }
    });
    

/* official solution:
    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }
    
      list.forEach(function (file) {
        console.log(file)
      })
    })


~/

/*
mymodule.filteredList("asdf", "bsdf", function(args){
    console.log(args);
});

mymodule.peter();
*/