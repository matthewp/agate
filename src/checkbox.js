var CheckboxView = View.extend({
  
  tagName: 'div',

  checkedClassName: 'agate-checkbox-checked',

  className: 'agate-checkbox agate-checkbox-img',

  checked: false,

  events: {
    'mousedown': 'down',
    'touchstart': 'down'
  },

  render: function() {
    if(this.checked)
      this.addClass(this.checkedClassName);
    else
      this.removeClass(this.checkedClassName);

    return this;
  },

  down: function(e) {
    e.preventDefault();

    this.checked = !this.checked;
    this.render();
  }

});
