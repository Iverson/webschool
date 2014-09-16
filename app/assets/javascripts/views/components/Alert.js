Ractive.components.Alert = Ractive.extend({
    template: JST['templates/services/alert'](),

    init: function() {
        var autoclose = this.get('autoclose');
        if (this.get('autoclose')) {
            setTimeout(this.teardown.bind(this), this.get('autoclose'));
        }
    },

    data: {
        type: "info"
    }
});