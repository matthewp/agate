var Groupbox = Backbone.Model.extend({

  defaults: {
    header: false,
    headerText: ''
  }

});

var GroupboxView = View.extend({

  tagName: 'div',

  className: 'agate-groupbox',

  model: new Groupbox(),

  initialize: function() {
    if(!(this.model instanceof Groupbox))
      this.model = new Groupbox(this.model);
  },

  render: function() {
    if(this.model.get('header')) {
      var header = this.renderHeader();

      this.el.appendChild(header);
    }

    return this;
  },

  renderHeader: function() {
    return this.make('div', {
      class: 'agate-groupbox-header'
    }, this.model.get('headerText'));
  }

});
