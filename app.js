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
      this.createDivider('Toggles'),
      this.createToggles(),
      this.createDivider('Checkboxes'),
      this.createChecks(),
      this.createDivider('Groupboxes'),
      this.createGroups(),
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
    var buttons = [];
    [ 'Uno', 'Dos', 'Tres' ].forEach(function(name) {
      var model = new Agate.Button();
      model.set('text', name);

      var btn = new Agate.RadioButtonView({
        model: model
      });
      
      buttons.push(btn);
    });

    var group = new Agate.RadioGroupView({ buttons: buttons });

    return group.render().el;
  },

  createToggles: function() {
    var toggle = new Agate.ToggleButtonView();

    return toggle.render().el;
  },

  createChecks: function() {
    var check = new Agate.CheckboxView();

    return check.render().el;
  },

  createGroups: function() {
    var InputGroupView = Agate.GroupboxView.extend({

      model: new Agate.Groupbox({
        header: true,
        headerText: 'Some'
      }),

      render: function() {
        Agate.GroupboxView.prototype.render.call(this);

        this.message = this.make('div', {
          style: 'padding: 8px;'
        }, 'This is a message');

        this.message2 = this.message.cloneNode();
        this.message2.textContent = 'Another message';

        this.el.appendChild(this.message);
        this.el.appendChild(this.message2);

        return this;
      }

    });

    var group = new InputGroupView();

    return group.render().el;
  },

  createNav: function() {
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
