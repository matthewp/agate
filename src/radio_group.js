var RadioGroupView = Backbone.View.extend({
  
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
        classes = el.className.split(' '),
        active = classes.indexOf('active') !== -1;
    
    if(!active) {
      
      this.options.buttons.forEach(function(btn) {
        var cs = btn.el.className.split(' ');
        
        btn.model.set('active', false);
        btn.el.className = _.without(cs, 'active').join(' ');
      });

      classes.push('active');
      el.className = classes.join(' ');

    }
  }

});
