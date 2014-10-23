var HelloAction = ApplicationAction.subclass({

  constructor : ApplicationAction.prototype.constructor,

  get : function() {
    var data = {
      something: 'teststststs'
    };
    this.render(200, 'hello/index', data);
  }

});

module.exports = HelloAction;
