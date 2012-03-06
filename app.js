(function() {
var AppView = Backbone.View.extend({
  
  tagName: 'div',

  className: 'agate',

  attributes: {
    'style': 'padding: 10px'
  },

  render: function() {
    var self = this;

    [
      this.createTopToolbar(),
      this.createDivider('Buttons'),
      this.createButtons(),
      this.createDivider('Radio'),
      this.createRadio(),
      this.createNav()
    ].forEach(function(el) {
      self.el.appendChild(el);
    });

    return this; 
  },

  createTopToolbar: function() {
    var toolbar = new Agate.ToolbarView({ model: { text: 'Agate' } }),
        el = toolbar.render().el;
    el.style.marginBottom = '10px';

    return el;
  },

  createButtons: function() {
    var btn = new Agate.ButtonView({ model: { text: 'Button' } });
    return btn.render().el;
  },

  createRadio: function(body) {
    var btn = new Agate.RadioButtonView({
      model: {
        text: 'Radio'
      }
    });

    return btn.render().el;
  },

  createNav: function(body) {
    var NavView = Agate.ToolbarView.extend({
      initialize: function() {
        Agate.ToolbarView.prototype.initialize.call(this);

        this.button = new Agate.ButtonView({
          model: {
            text: 'Go'
          }
        });
      },

      render: function() {
        this.el = Agate.ToolbarView.prototype.render.call(this).el;
        this.el.appendChild(
          this.button.render().el
        );

        return this;
      }
    });

    var nav = new NavView(),
        el = nav.render().el;

    el.className += ' bottom-bar';
    return el;
  },

  createDivider: function(text) {
    var el = document.createElement('div');
    el.className = 'divider';
    if(text)
      el.textContent = text;

    return el;
  }


});

this.App = new AppView();

}).call(this);
