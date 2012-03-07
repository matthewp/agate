var Button = Backbone.Model.extend({
  defaults: {
    text: '',
    active: false
  }
});

var ButtonView = Backbone.View.extend({

  tagName: 'button',

  className: 'agate-button',

  model: new Button(),

  initialize: function() {
    if(!(this.model instanceof Button))
      this.model = new Button(this.model);
  },

  render: function() {
    this.el.textContent = this.model.get('text');
    if(this.model.get('active')) {
      var classes = this.el.className.split(' ');
      classes.push('active');

      this.el.className = classes.join(' ');
    }

    return this;
  }
});
