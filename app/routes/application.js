import Ember from 'ember';

export
default Ember.Route.extend({
  model: function() {
    var data = Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      items: this.store.findAll('item'),
      tags: this.store.findAll('tag')
    });
    return data;
  },

  setupController: function(controller, model) {
    var itemsSortMixin = controller.get('controllers.item-sort');
    controller.set('sortedItems', itemsSortMixin);    
    controller.set('model', model);
    itemsSortMixin.set('model', model.items)
  },

  afterModel: function(model) {

  }
});