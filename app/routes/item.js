export default Ember.Route.extend({
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
        controller.set('categories', this.store.all('category'));

        var tags = this.store.findAll('tag').toArray();

        /*$(document).ready(function() {
                console.log($('#tagsInput'));
                $('#tagsInput').tagsinput({
                    itemValue: 'id',
                    itemText: 'title',
                    typeaheadjs: {
                      name: 'tags',
                      displayKey: 'title',
                      source: function() {
                        return ['tag1', 'tag2']
                      }
                    }
                });
            });*/
    },
    model: function(params) {
        return this.store.find('item', params.item_id);
    },
});