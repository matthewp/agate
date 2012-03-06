/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

(function() {
'use strict';
var Button = Backbone.Model.extend({

});

var ButtonView = Backbone.View.extend({

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
