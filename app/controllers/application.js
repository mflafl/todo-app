import Ember from 'ember';

export
default Ember.Controller.extend({
  queryParams: ['category', 'tag', 'search'],
  search: null,
  category: null,
  tag: null,
  filteredItems: Ember.computed.filter('items', function(item) {
    var category = this.get('category');
    //console.log(item.category.name);
    return true;
  }),
  items: function() {
    var items = this.get('model').items;
    return items;
  }.property('model'),
  tags: function() {
    return this.get('model').tags;
  }.property('model'),
  categories: function() {
    return this.get('model').categories;
  }.property('model'),

  actions: {
    makeDone: function(model) {
      model.set('done', true);
      model.save();
    }
  }
});