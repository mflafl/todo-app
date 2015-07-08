    export
    default Ember.Controller.extend({
        actions: {
            save: function() {
                this.model.save();
                this.transitionTo('index');
            },
            cancel: function() {
                this.model.deleteRecord();
                this.transitionTo('index');
            }
        }
    });