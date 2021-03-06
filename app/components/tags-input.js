import Ember from 'ember';
/* global Bloodhound */

export
default Ember.Component.extend({
  tagName: 'select',
  attributeBindings: ['multiple'],
  multiple: 'multiple',
  didInsertElement: function() {
    var element = this.$();
    var tagsObservable = this.attrs.selectedTags,
      tagsData = this.attrs.allTags;


    var bh = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: tagsData.value
    });

    element.tagsinput({
      typeaheadjs: {
        hint: true,
        highlight: true,
        source: bh
      }
    });

    tagsObservable.value.forEach(function(tag) {
      element.tagsinput('add', tag);
    });

    element.on('itemAdded', function(event) {
      tagsObservable.update(element.val());
    });

    element.on('itemRemoved', function(event) {
      tagsObservable.update(element.val());
    });
  }
});