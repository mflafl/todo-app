import Ember from 'ember';
import DS from 'ember-data';

export
default Ember.Route.extend({
  setupController: function(controller, model) {

    var config = this.container.lookupFactory('config:environment');

    controller.set('isEditing', false);
    if (model.get('body') === '') {
      controller.set('isEditing', true);
    }
    controller.set('model', model);

    var revisions = DS.PromiseArray.create({
      promise: $.get(config.APP.apiBase + '/' + config.APP.apiNameSpace + '/' + 'items/' + model.get('id') + '/revisions')
    });
    controller.set('revisionsData', revisions);

    controller.set('categories', this.store.peekAll('category'));
    controller.set('tags', this.store.peekAll('tag').mapBy('name'));
  },
  model: function(params) {
    return this.store.find('item', params.item_id);
  },
});