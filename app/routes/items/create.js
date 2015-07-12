import Ember from 'ember';

export
default Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('item').set('isEditing', true);
  },
  model: function() {
    var self = this;
    var model = this.store.createRecord('item');
    model.save().then(function() {
      self.transitionTo('item', model.id);
    });
    return model;
  }
});