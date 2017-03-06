 var net = require('net');
 var strftime = require('strftime');
 
 var server = net.createServer(function (socket) {
    //console.log(strftime('%Y-%m-%d %H:%M', new Date()));
    socket.write(strftime('%Y-%m-%d %H:%M', new Date()) + "\n");
    //socket.wirite("\n");
    socket.end();
 });
 server.listen(process.argv[2]);
 
 
 /* official solution:
 
     var net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
 
 */