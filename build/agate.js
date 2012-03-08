/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

(function() {
'use strict';
var slice = Array.prototype.slice;
var splice = Array.prototype.splice;

function include(arr, val) {
  if(arr.indexOf(val) !== -1)
    return arr;

  arr.push(val);

  return arr;
}

function exclude(arr, val) {
  var index;

  if((index = arr.indexOf(val)) === -1)
      return arr;

  var newArr = arr.slice(index, index++);

  return newArr;
}
var View = Backbone.View.extend({

  hasClassName: function(oldClassName, className) {
    return oldClassName.split(' ').indexOf(className) !== -1;
  },

  addClassName: function(oldClassName, newClassName) {
    var classes = oldClassName.split(' ');

    if(classes.indexOf(newClassName) !== -1)
      return oldClassName;

    classes.push(newClassName);

    return classes.join(' ');
  },

  removeClassName: function(oldClassName, newClassName) {
    var classes = oldClassName.split(' ');

    var index;
    if((index = classes.indexOf(newClassName)) === -1)
      return oldClassName;

    classes.splice(index, 1);

    return classes.join(' ');
  },

  hasClass: function(className) {
    return this.hasClassName(className);
  },

  addClass: function(className) {
    this.className = this.addClassName(this.className, className);

    if(this.el)
      this.el.className = this.className;
  },

  removeClass: function(className) {
    this.className = this.removeClassName(this.className, className);
    
    if(this.el)
      this.el.className = this.className;
  }

});
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
var RadioGroupView = View.extend({
  
  buttons: [],

  events: {
    'mouseup button': 'up',
    'touchend button': 'up'
  },

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
  },

  up: function(e) {
    var el = e.target,
        active = this.hasClassName(el.className, 'active'),
        self = this;
    
    if(!active) {
      
      this.options.buttons.forEach(function(btn) {
        btn.model.set('active', false);
        btn.el.className = self.removeClassName(
          btn.el.className, 'active');
      });

      el.className = this.addClassName(el.className, 'active');
    }
  }

});
var ToggleButtonView = ButtonView.extend({

  tagName: 'div',

  className: 'agate-toggle-button',

  value: false,

  events: {
    'mouseup': 'up',
    'touchend': 'up'
  },

  initialize: function() {
    ButtonView.prototype.initialize.call(this);

    this.value = this.options.value || false;
  },

  render: function() {
    var self = this;

    ButtonView.prototype.render.call(this);

    if(!this.onEl || !this.offEl || !this.knobEl) {
      this.onEl = this.renderOn();
      this.offEl = this.renderOff();
      this.knobEl = this.renderKnob();
    }

    [ this.onEl, this.offEl, this.knobEl ].forEach(function(el) {
      self.el.appendChild(el);
    });
    
    return this;
  },

  renderOn: function() {
    var el = this.make('div', {
      style: !this.value ? 'display: none;' : '',
      class: 'agate-toggle-content on'
    }, 'On');

    return el;
  },

  renderOff: function() {
    var el = this.make('div', {
      style: this.value ? 'display: none;' : '',
      class: 'agate-toggle-content off'
    }, 'Off');

    return el;
  },

  renderKnob: function() {
    var el = this.make('div', {
      class: 'agate-toggle-button-knob'
    });

    return el;
  },

  up: function() {
    this.value = !this.value;

    var turnOn = this.value ? this.onEl : this.offEl;
    var turnOff = this.value ? this.offEl : this.onEl;

    turnOn.style.display = null;
    turnOff.style.display = 'none';
  }

});
var CheckboxView = View.extend({
  
  tagName: 'div',

  checkedClassName: 'agate-checkbox-checked',

  className: this.baseClassName,

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

  down: function() {
    this.checked = !this.checked;
    this.render();
  }

});
var Groupbox = Backbone.Model.extend({

  defaults: {
    header: false,
    headerText: ''
  }

});

var GroupboxView = Backbone.View.extend({

  tagName: 'div',

  className: 'agate-groupbox',

  model: new Groupbox(),

  initialize: function() {
    if(!(this.model instanceof Groupbox))
      this.model = new Groupbox(this.model);
  },

  render: function() {
    if(this.model.get('header')) {
      if(!this.header)
        this.renderHeader();

      this.el.appendChild(this.header);
    }

    return this;
  },

  renderHeader: function() {
    this.header = this.make('div', {
      class: 'agate-groupbox-header'
    }, this.model.get('headerText'));

    return this.header;
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
  View: View,

  Toolbar: Toolbar,
  ToolbarView: ToolbarView,

  Button: Button,
  ButtonView: ButtonView,

  RadioButtonView: RadioButtonView,
  RadioGroupView: RadioGroupView,

  ToggleButtonView: ToggleButtonView,
  CheckboxView: CheckboxView,

  Groupbox: Groupbox,
  GroupboxView: GroupboxView
};
}).call(this);
