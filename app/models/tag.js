    export
    default DS.Model.extend({
        title: DS.attr(),
        items: DS.hasMany('items'),
    });