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
});