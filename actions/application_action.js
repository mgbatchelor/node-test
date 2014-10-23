var _ = require('underscore');

var ApplicationAction = Stapes.subclass({

  constructor : function(request, response) {
    this.request = request;
    this.response = response;
    this.params = {};
  },

  render : function(status, template, data, options) {
    options = _.extend({ 'content-type': 'text/html' }, options);
    this.response.writeHead(status, options);
    this.response.write(HBS[template](data));
  }

});

module.exports = ApplicationAction;
