export
default Ember.Component.extend({
    id: 'tagsInput',
    tagName: 'input',
    classNames: ['form-control', 'typeahead'],
    didInsertElement: function() {
        console.log(this);
        this.$()

        return;
        var data = ['test', 'test2'];

        var bh = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('tag_name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: data
        });
        bh.initialize();


        this.$('#sire').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'sires',
            displayKey: Meteor.Cattle.getReferenceCattleDisplayKey(),
            source: siresBh.ttAdapter()
        }).bind("typeahead:selected", function(obj, datum, name) {
            self.$('#sireLink').attr('href', '/cattle/' + datum.timestamp);
            self.$('#sireTimestamp').attr('value', datum.timestamp);
        });
    }
});