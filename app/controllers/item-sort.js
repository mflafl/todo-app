import Ember from 'ember';

export
default Ember.ArrayController.extend({
  sortProperties: ['created'],
  sortAscending: false
});