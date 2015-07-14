import Ember from 'ember';

export
default Ember.Route.extend({
  model: function() {
    var data = Ember.RSVP.hash({
      //items: this.store.findAll('item'),
      categories: this.store.findAll('category'),
      tags: this.store.findAll('tag')
    });
    return data;
  },
  setupController: function(c, m) {
    c.set('categories', m.categories);
    //c.set('items', m.items);
    c.set('tags', m.tags);
  }
});