var Input = Backbone.Model.extend({
  
  defaults: {
    placeholder: '',

    text: ''
  }
    
});

var InputView = View.extend({

  tagName: 'label',

  className: 'agate-input-decorator',

  model: Input,

  initialize: function() {
    if(!(this.model instanceof Input))
      this.model = new Input(this.model);

    this.model.on('change:text', this.setText, this);
  },

  render: function() {
    var input = this.renderInput();  

    this.el.appendChild(input);

    return this;
  },

  renderInput: function() {
    this.inputEl = this.make('input', {
      class: 'agate-input',
      placeholder: this.model.get('placeholder'),
      value: this.model.get('text')
    });

    return this.inputEl;
  },

  setText: function() {
    var text = this.model.get('text');         
    this.inputEl.value = text;
  }

});
