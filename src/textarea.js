var TextareaView = InputView.extend({

  tagName: 'label',

  className: 'agate-textarea-decorator',

  model: new Input(),

  initialize: function() {
    if(!(this.model instanceof Input))
      this.model = new Input(this.model);

    this.model.on('change:text', this.setText, this);
  },

  render: function() {
    this.renderTextarea();
    this.bindEvents(this.textareaEl);

    this.el.appendChild(this.textareaEl);

    return this;
  },

  renderTextarea: function() {
    this.textareaEl = this.make('textarea', {
      class: 'agate-textarea agate-input',
      placeholder: this.model.get('placeholder'),
      value: this.model.get('text')
    });

    return this.textareaEl;
  },

  setText: function() {
    var text = this.model.get('text');
    this.textareaEl.value = text;
  }

});
