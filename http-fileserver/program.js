//console.log("port=" + Number(process.argv[2]) + " - location=" + process.argv[3]);
var http = require('http');
var fs = require('fs');
var location = process.argv[3];
var server = http.createServer(function (request, response) {
    var readStream = fs.createReadStream(location);

    readStream.on('open', function () {
        readStream.pipe(response);
    });

    readStream.on('error', function(err) {
        response.end(err);
    });
});
server.listen(Number(process.argv[2]));


/* official solution:

    var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

*/