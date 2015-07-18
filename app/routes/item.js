import Ember from 'ember';
import DS from 'ember-data';

export
default Ember.Route.extend({
  setupController: function(controller, model) {
    var config = this.container.lookupFactory('config:environment');

    if (model.get('body') === '') {
      controller.set('isEditing', true);
    } else {
      controller.set('isEditing', false);
    }

    var revisions = DS.PromiseArray.create({
      promise: $.get(config.APP.apiBase + '/' + config.APP.apiNameSpace + '/' + 'items/' + model.get('id') + '/revisions')
    });

    controller.set('model', model);
    controller.set('revisionsData', revisions);
    controller.set('categories', this.store.peekAll('category'));
    controller.set('tags', this.store.peekAll('tag').mapBy('name'));
  },
  model: function(params) {
    return this.store.find('item', params.item_id);
  },
});