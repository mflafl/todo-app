import Ember from 'ember';

export
default Ember.Controller.extend({
  queryParams: ['category', 'tag', 'search'],
  search: null,
  category: null,
  tag: null,
  filteredItems: function() {
    var self = this;

    var filterCategory = self.get('category');

    return self.get('model').items.filter(function(item, index, enumerable) {
      if (filterCategory) {
        if (item.get('category')) {
          var itemCategory = item.get('category').get('id');
          if (filterCategory != itemCategory) {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    });

  }.property('model.items.@each', 'category'),
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