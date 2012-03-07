var CheckboxView = Backbone.View.extend({
  
  tagName: 'div',

  baseClassName: 'agate-checkbox agate-checkbox-img',

  className: this.baseClassName,

  checked: false,

  events: {
    'mousedown': 'down',
    'touchstart': 'down'
  },

  render: function() {
    this.className = this.checked
      ? this.baseClassName + ' agate-checkbox-checked'
      : this.baseClassName;

    this.el.className = this.className;

    return this;
  },

  down: function() {
    this.checked = !this.checked;
    this.render();
  }

});
