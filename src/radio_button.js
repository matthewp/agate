var RadioButtonView = Backbone.View.extend({

  tagName: 'button',

  className: 'agate-radiobutton',

  model: new Button(),

  initialize: function() {
    if(!(this.model instanceof Button))
      this.model = new Button(this.model);
  },

  render: function() {
    this.el.textContent = this.model.get('text');
    return this;
  }
});
