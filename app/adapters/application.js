import DS from 'ember-data';

export
default DS.RESTAdapter.extend({
  host: "http://localhost:8452",
  namespace: "api/v1",
  shouldReloadAll: function() {
    return false;
  },
  shouldBackgroundReloadRecord: function(store, snapshot) {
    return true;
  }
});