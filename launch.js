var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(80, "172.31.39.14");
console.log('Server running at http://52.42.5.103:80/');
