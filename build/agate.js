/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

(function() {
'use strict';
var Button = Backbone.Model.extend({
  text: ''
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
var Toolbar = Backbone.Model.extend({
  text: ''
});

var ToolbarView = Backbone.View.extend({

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

this.Agate = {
  Toolbar: Toolbar,
  ToolbarView: ToolbarView,

  Button: Button,
  ButtonView: ButtonView
};
}).call(this);
