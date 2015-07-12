import Ember from 'ember';

export
default Ember.Controller.extend({
  search: '',
  actions: {
    makeDone: function(model) {
      model.set('done', true);
      model.save();
    }
  }
});