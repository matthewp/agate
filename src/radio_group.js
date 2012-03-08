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
