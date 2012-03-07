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
