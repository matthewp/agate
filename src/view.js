var View = Backbone.View.extend({

  hasClassName: function(oldClassName, className) {
    return oldClassName.split(' ').indexOf(className) !== -1;
  },

  addClassName: function(oldClassName, newClassName) {
    var classes = oldClassName.split(' ');

    if(classes.indexOf(newClassName) !== -1)
      return oldClassName;

    classes.push(newClassName);

    return classes.join(' ');
  },

  removeClassName: function(oldClassName, newClassName) {
    var classes = oldClassName.split(' ');

    var index;
    if((index = classes.indexOf(newClassName)) === -1)
      return oldClassName;

    classes.splice(index, 1);

    return classes.join(' ');
  },

  hasClass: function(className) {
    return this.hasClassName(className);
  },

  addClass: function(className) {
    this.className = this.addClassName(this.className, className);

    if(this.el)
      this.el.className = this.className;
  },

  removeClass: function(className) {
    this.className = this.removeClassName(this.className, className);
    
    if(this.el)
      this.el.className = this.className;
  }

});
