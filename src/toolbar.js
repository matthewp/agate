var Toolbar = Backbone.Model.extend({
  defaults: {
    text: ''
  }
});

var ToolbarView = View.extend({

  tagName: 'div',

  className: 'agate agate-toolbar agate-toolbar-inline agate-toolbar-centered',

  model: new Toolbar(),

  initialize: function() {
    if(!(this.model instanceof Toolbar))
      this.model = new Toolbar(this.model);
  },

  render: function() {
    this.el.textContent = this.model.get('text');
    return this;
  }

});

