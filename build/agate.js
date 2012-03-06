/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

(function() {
'use strict';
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
var Toolbar = Backbone.View.extend({

  tagName: 'div',

  className: 'agate agate-toolbar agate-toolbar-inline agate-toolbar-centered',

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

this.Agate = {
  Toolbar: Toolbar,
  Button: Button
};
}).call(this);
