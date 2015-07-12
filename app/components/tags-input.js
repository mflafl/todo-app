import Ember from 'ember';
/* global Bloodhound */


export
default Ember.Component.extend({
  tagName: 'select',
  attributeBindings: ['multiple'],
  multiple: 'multiple',
  didInsertElement: function() {
    var element = this.$();
    var tagsObservable = this.attrs.testAttr;
    var data = [{
        name: 'tag1'
      }, {
        name: 'tag2'
      }
    ];

    var bh = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: ["tag1", "tag2"]
    });

    this.$().tagsinput({
      typeaheadjs: {
        hint: true,
        highlight: true,
        source: bh
      }
    });

    element.on('itemAdded', function(event) {
      // event.item: contains the item
      tagsObservable.update(element.val());
    });

    element.on('itemRemoved', function(event) {
      tagsObservable.update(element.val());
    });
  }
});