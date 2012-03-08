var Input = Backbone.Model.extend({

});

var InputView = View.extend({

  tagName: 'label',

  className: 'agate-input-decorator',

  model: new Input(),

  initialize: function() {
    if(!(this.model instanceof Input))
      this.model = new Input();
  },

  render: function() {
    var input = renderInput();  

    this.el.appendChild(input);

    return this;
  },

  renderInput: function() {
    return this.make('input', {
      class: 'agate-input',
      placeholder: this.model.get('placeholder')
    });
  }

});
