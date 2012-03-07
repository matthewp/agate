var ToggleButtonView = ButtonView.extend({

  value: false,

  initialize: function() {
    ButtonView.prototype.initialize.call(this);

    this.value = this.options.value || false;
  },

  render: function() {
    ButtonView.prototype.render.call(this);

    this.el.className = this.value ? 'on' : 'off';
    
    return this;
  }

});
