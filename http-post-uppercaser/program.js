var http = require('http');
var map = require('through2-map');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    if (req.method == 'POST') {
        req.pipe(map(function (chunk) {  
            return chunk.toString().toUpperCase();
        })).pipe(res);
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("only post requests are supported");
    }
});

server.listen(Number(process.argv[2]));


/* official solution:

    var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

*/