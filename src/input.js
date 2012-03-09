var Input = Backbone.Model.extend({
  
  defaults: {
    placeholder: '',

    text: ''
  }
    
});

var InputView = View.extend({

  tagName: 'label',

  className: 'agate-input-decorator',

  model: new Input(),

  initialize: function() {
    if(!(this.model instanceof Input))
      this.model = new Input(this.model);

    this.model.on('change:text', this.setText, this);
  },

  bindEvents: function(el) {
    var self = this;

    [ 'focus', 'blur' ].forEach(function(evt) {
      el.removeEventListener(evt, self);
      el.addEventListener(evt, self);
    });
  },

  handleEvent: function(e) {
    e.preventDefault();

    switch(e.type) {
      case 'focus':
        this.setFocused();
        break;
      case 'blur':
        this.setBlurred();
        break;
    }
  },

  render: function() {
    var input = this.renderInput();
    this.bindEvents(input);

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
  },

  setFocused: function() {
    this.addClass('agate-focused');
  },

  setBlurred: function() {
    this.removeClass('agate-focused');
  }

});
