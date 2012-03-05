var Toolbar = Backbone.View.extend({

  tagName: 'div',

  className: 'agate-toolbar',

  initialize: function() {
    if(this.options && this.options.title)
      this.title = this.options.title;
  },

  render: function() {
    this.el.textContent = this.text;
    return this;
  }

});

