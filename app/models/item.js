  import DS from 'ember-data';

  export
  default DS.Model.extend({
    title: DS.attr('string', {
      defaultValue: 'Untitled'
    }),
    body: DS.attr('string', {
      defaultValue: ''
    }),
    tags: DS.hasMany('tags'),
    category: DS.belongsTo('category', {
      async: false
    }),
    done: DS.attr(),
    doneAt: DS.attr(),
    created: DS.attr(),
    updated: DS.attr(),
    revisions: DS.attr(),
    version: DS.attr(),

    // virtual for sending tags as plain array of text values
    tagsPlain: DS.attr()
  });