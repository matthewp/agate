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
