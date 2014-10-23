require('./initialize');
var route = require('./modules/router');

var http = require('http');
http.createServer(function(request, response) {
  route(request, response);
}).listen(8080);
console.log('Server started on port 8080...');
