  import DS from 'ember-data';

  export
  default DS.Model.extend({
    items: DS.hasMany('items', { async: false }),
    title: DS.attr(),
    created: DS.attr()
  });