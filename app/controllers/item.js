    export
    default Ember.Controller.extend({
        isEditing: false,
        actions: {
            revertToVersion: function(revision) {
                this.model.set('body', revision.body);
                this.model.set('title', revision.title);
            },
            edit: function() {
                this.set('isEditing', true);
            },
            doneEditing: function() {
                this.set('isEditing', false);
                this.model.save();
            },
            cancelEditing: function() {
                this.set('isEditing', false);
            },
            remove: function() {
                this.model.deleteRecord();
                this.model.save();
                this.transitionTo('index');
            },
        }
    });