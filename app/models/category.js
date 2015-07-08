    export
    default DS.Model.extend({
        items: DS.hasMany('items'),
        title: DS.attr(),
        //created: DS.attr()
    });