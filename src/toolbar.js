var Toolbar = Backbone.View.extend({

  tagName: 'div',

  className: 'agate-toolbar agate-toolbar-inline agate-toolbar-centered',

  text: '',

  initialize: function() {
    if(this.options && this.options.text)
      this.text = this.options.text;
  },

  render: function() {
    this.el.textContent = this.text;
    return this;
  }

});

