(function() {
var AppView = Backbone.View.extend({
  
  tagName: 'div',

  className: 'agate',

  attributes: {
    'style': 'padding: 10px;'
  },

  render: function() {
    var self = this;

    var container = this.make('div', {
      class: 'agate',
      style: 'margin-bottom: 65px;'
    });

    [
      this.createTopToolbar(),
      this.addContent('desc_intro'),
      this.createDivider('Buttons'),
      this.createButtons(),
      this.addContent('desc_button'),
      this.createDivider('Radio'),
      this.createRadio(),
      this.addContent('desc_radio'),
      this.createDivider('Toggles'),
      this.createToggles(),
      this.createDivider('Checkboxes'),
      this.createChecks(),
      this.createDivider('Groupboxes'),
      this.createGroups(),
      this.createDivider('Inputs'),
      this.createInputs()
    ].forEach(function(el) {
      container.appendChild(el);
    });

    self.el.appendChild(container);
    self.el.appendChild(this.createNav());

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
        headerText: 'header'
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

  createInputs: function() {
    var InputGroupView = Agate.GroupboxView.extend({

      model: new Agate.Groupbox({
        header: true,
        headerText: 'form'
      }),

      render: function() {
        Agate.GroupboxView.prototype.render.call(this);

        var input = new Agate.InputView({
          model: {
            placeholder: 'Name?'
          },
        });

        var el = this.el;
        el.appendChild(input.render().el);

        
        var txt = new Agate.TextareaView({
          model: {
            placeholder: 'Long form content'
          },

          attributes: {

          }
        });
        el.appendChild(txt.render().el);

        var btn = new Agate.ButtonView({
          model: {
            text: 'Click me'
          },
          attributes: {
            style: 'width: 100%'
          }
        });
        var up = function() {
          input.model.set('text', 'Hello there!');
        };
        
        btn.delegateEvents({
          'touchend': up,
          'mouseup': up
        });

        el.appendChild(btn.render().el);

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
  },

  addContent: function(id) {
    var scrEl = document.getElementById(id),
        el = document.createElement('article');

    el.innerHTML = scrEl.innerHTML;
   
    return el;
  }

});

this.App = new AppView();

}).call(this);
