export
default Ember.Route.extend({
  model: function() {
    var data = Ember.RSVP.hash({
      items: this.store.find('item'),
      categories: this.store.find('category'),
      tags: this.store.find('tag')
    });
    return data;
  },
  setupController: function(c, m) {
    c.set('categories', m.categories);
    c.set('items', m.items);
    c.set('tags', m.tags);
  }
});