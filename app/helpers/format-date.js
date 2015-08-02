import Ember from 'ember';
/* global moment */

export
default Ember.Helper.helper(function(value, options) {
  return moment(new Date(value)).fromNow();
});