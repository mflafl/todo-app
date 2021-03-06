import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('item', {
    path: '/item/:item_id'
  });
  this.resource('items', function() {
    this.route('create');
  });
  this.resource('categories', function() {
    this.route('create');
  });
});

export
default Router;