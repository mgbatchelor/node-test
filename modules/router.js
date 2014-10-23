var fs   = require('fs');

var config = JSON.parse(fs.readFileSync('./routes.json', 'utf8'));
console.log("--- Routes ---");
console.log(config);

module.exports = function(request, response) {
  // console.log("headers");
  // console.log(request.headers);
  // console.log("Url: " + request.url);
  // console.log("Method: " + request.method)
  var controller;
  if( request.url === '/' ) {
    path = "/" + config.default;
  } else {
    path = request.url;
  }
  if( path.split('/').length > 0 && path.indexOf('.ico') === -1 ) {
    var actionFile = './actions' + path + '_action';
    if( fs.existsSync(actionFile + '.js') ){
      console.log(new Date().toISOString() + " - " + request.method + " " + path);
      var Action = require('../' + actionFile);
      var action = new Action(request, response);
      action[request.method.toLowerCase()]();
    }
  }
  response.end();
};
