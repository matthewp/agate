var Button = Backbone.View.extend({

  tagName: 'button',

  className: 'agate-button',

  text: '',

  events: {
    'mousedown': 'down',
    'touchstart': 'down',
    'mousemove': 'move',
    'touchmove': 'move',
    'mouseup': 'up',
    'touchend': 'up'
  },

  initialize: function() {
    if(this.options && this.options.text)
      this.text = this.options.text;
  },

  render: function() {
    this.el.textContent = this.text;
    return this;
  },

  down: function() {

  },

  move: function() {

  },

  up: function() {

  }

});
