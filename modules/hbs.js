var fs = require('fs'),
    Handlebars = require('handlebars'),
    _ = require('underscore'),
    recursiveFiles = require('recursive-readdir');


var TEMPLATE_DIR = './templates/';

var compileHBS = function(fileName) {
  return Handlebars.compile(fs.readFileSync(fileName, { encoding : 'utf8' }));
};

var templates = {};
recursiveFiles(TEMPLATE_DIR, function (err, files) {
  _.each(files, function(fileName){
    var key = fileName.substr(10, fileName.length - 14);
    console.log("Compiling view: " + key);
    templates[key] = compileHBS(fileName);
  });
});

module.exports = templates;
