var Input = Backbone.Model.extend({

});

var InputView = Backbone.View.extend({

  tagName: 'label',

  className: 'agate-input-decorator',

  model: new Input(),

  initialize: function() {
    if(!(this.model instanceof Input))
      this.model = new Input();
  },

  render: function() {
    this.input = renderInput();  

    this.el.appendChild(this.input);

    return this;
  },

  renderInput: function() {
    var input = this.make('input', {
      class: 'agate-input',
      placeholder: this.model.get('placeholder')
    });

    return input;
  }

});
