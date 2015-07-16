import Ember from 'ember';

export
default Ember.Route.extend({
  model: function() {
    var data = Ember.RSVP.hash({
      items: this.store.findAll('item'),
      categories: this.store.findAll('category'),
      tags: this.store.findAll('tag')
    });
    return data;
  },
});