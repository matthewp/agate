/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

(function() {
'use strict';
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
var RadioButtonView = ButtonView.extend({
  className: 'agate-radiobutton'
});
var RadioGroupView = Backbone.View.extend({
  
  buttons: [],

  initialize: function() {
    var buttons = this.options.buttons;
    if(buttons && buttons.length > 0) {
      buttons[0].model.set('active', true);
    }
  },

  render: function() {
    var self = this;

    self.options.buttons.forEach(function(btn) {
      var el = btn.render().el;
      self.el.appendChild(el);
    });

    return self;
  }

});
var Toolbar = Backbone.Model.extend({
  defaults: {
    text: ''
  }
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
  ButtonView: ButtonView,

  RadioButtonView: RadioButtonView,
  RadioGroupView: RadioGroupView
};
}).call(this);
