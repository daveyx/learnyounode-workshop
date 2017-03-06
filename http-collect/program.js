var http = require('http');
var bl = require('bl');
var dataCollected = "";
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.pipe(bl(function (err, data) {
    if (err) {
        console.error("error pipe", err);
        return;
    }
    dataCollected += data.toString();
  }));
  
  response.on('end', function(arg) {
      console.log(dataCollected.length);
      console.log(dataCollected);
  });
  response.on('error', console.error);
}).on('error', console.error);


/* official solution:

    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })



*/