var Button = Backbone.Model.extend({
  defaults: {
    text: ''
  }
});

var ButtonView = Backbone.View.extend({

  tagName: 'button',

  className: 'agate-button',

  events: {
    'mousedown': 'down',
    'touchstart': 'down',
    'mousemove': 'move',
    'touchmove': 'move',
    'mouseup': 'up',
    'touchend': 'up'
  },

  model: new Button(),

  initialize: function() {
    if(!(this.model instanceof Button))
      this.model = new Button(this.model);
  },

  render: function() {
    this.el.textContent = this.model.get('text');
    return this;
  },

  down: function() {

  },

  move: function() {

  },

  up: function() {

  }

});
