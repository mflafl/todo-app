import Ember from 'ember';
/* global moment */

export
default Ember.Handlebars.makeBoundHelper(function(value, options) {
  return moment(value).fromNow();
});