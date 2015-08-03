import Ember from 'ember';

export
default Ember.Controller.extend({
  needs: ['item-sort'],
  queryParams: ['category', 'tag', 'search'],
  search: null,
  category: null,
  tag: null,

  categoryName: function() {
    var filterCategory = this.get('category');

    if (filterCategory) {
      var category = this.store.peekRecord('category', filterCategory);
      if (category) {
        return category.get('title');
      }
    }

    return false;
  }.property('category', 'model.items.@each'),


  items: function() {
    var items = this.get('controllers.item-sort').get('arrangedContent');
    var self = this;

    var filterCategory = self.get('category');
    var filterTag = self.get('tag');

    if (filterCategory || filterTag) {
      return items.filter(function(item, index, enumerable) {
        if (filterTag) {
          if (item.get('tags')) {
            return item.get('tags').findBy('id', filterTag);
          } else {
            return false;
          }
        } else if (filterCategory) {
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
    } else {
      return items
    }
  }.property('model.items.@each', 'tag', 'category'),
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