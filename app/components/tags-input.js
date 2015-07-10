export
default Ember.Component.extend({
    tagName: 'select',
    attributeBindings: ['multiple'],
    multiple: 'multiple',
    didInsertElement: function() {
        //!! get all items - $("select").val()
        
        
        //console.log(this);
        //.update(1);
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
            // `states` is an array of state names defined in "The Basics"
            local: ["tag1", "tag2"]
        });

        this.$().tagsinput({
            typeaheadjs: {
                hint: true,
                highlight: true,
                source: bh
            }
        });

        this.$().on('itemAdded', function(event) {
            // event.item: contains the item
        });
    }
});