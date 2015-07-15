import Ember from 'ember';

export
default Ember.Controller.extend({
  queryParams: ['category', 'tag', 'search'],
  search: null,
  category: null,
  tag: null,
  items: function() {
    var items = this.get('model').items;
    /*var tag = this.get('tag');
    var category = this.get('category');
    
    if (tag) {
      return items.filterBy('tag', tag);
    } else if (category) {
      return items.filterBy('category', category);
    } else {
      //return items.filterBy('name', 'Untitled22');
    }*/
    console.log(this.get('model').items); 
    return items.filterBy('done', false);
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