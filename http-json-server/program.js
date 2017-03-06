var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    var date = new Date(query.iso);
    /*console.log(date);
    console.log(date.toISOString(query.iso));
    console.log(date.getTime(query.iso));*/
    if (url.parse(req.url, true).pathname.startsWith("/api/parsetime")) {
        var parsed = new Object();
        parsed["hour"] = date.getHours();
        parsed["minute"] = date.getMinutes();
        parsed["second"] = date.getSeconds();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(parsed));
    } else if (url.parse(req.url, true).pathname.startsWith("/api/unixtime")) {
        var unix = new Object();
        unix["unixtime"] = date.getTime(query.iso);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(unix));
    } else {
        res.writeHead(404);
        res.end();
    }
        res.end();
});
server.listen(Number(process.argv[2]));



/* official solution:

    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))


*/