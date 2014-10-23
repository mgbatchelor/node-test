var TestAction = ApplicationAction.subclass({

  constructor : ApplicationAction.prototype.constructor,

  get : function() {
    var data = {
      something: 'aaaaa'
    };
    this.render(200, 'test/index', data);
  }

});

module.exports = TestAction;
