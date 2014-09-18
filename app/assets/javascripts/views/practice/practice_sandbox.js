(function(global, EventProxy, Alert, Key) {
    "use strict";

    Views.PracticeSandbox = Ractive.extend({
        el: '.b-practice',
        template: JST['templates/practice/sandbox'](),

        init: function() {
            this._codeAreas = this.findAllComponents('Codearea');
            this._tabs = this.findComponent('Tabs');
            this._iframe = this.find('.b-sandbox-result');
            this._invalidFilesIndexes = [];

            Key("shift+enter", this.exec.bind(this));
            EventProxy.on('sandboxExec', this.exec.bind(this));
            EventProxy.on('sandboxExecuted', this.showReport.bind(this));
            this.on('hideAlert', this.hideReport.bind(this));
        },

        runCode: function() {
            var iframe_window = this._iframe.contentWindow;
            var content = Mustache.render(this.get('template'), {
                html: this._codeAreas[0].value(),
                css: this._codeAreas[1].value(),
                js: this._codeAreas[2].value()
            });

            iframe_window.document.open();
            iframe_window.document.write(content);
            iframe_window.document.close();
        },

        validate: function() {
            var is_valid = true;
            var item_is_valid;
            var self = this;

            _.each(this._codeAreas, function(code, i) {
                item_is_valid = code.isValid();


                if (!item_is_valid) {
                    is_valid = false;
                }

                self.set('tabs.' + i + '.valid', item_is_valid);
            });

            return is_valid;
        },

        exec: function() {
            if (this.validate()) {
                this.runCode();
            }
        },

        buildReportMessage: function(report) {
            var message,
                type;

            if (!report.passed) {
                type = "danger";
                message = report.suites[0].specs[0].failures[0].message;
            } else {
                type = "success";
                message = "Good job!";
            }

            return {message: message, type: type};
        },

        showReport: function(event, data) {
            var report = this.buildReportMessage(data);

            this.set({
                "alert.visible": true,
                "alert.message": report.message,
                "alert.type": report.type,
            });
        },

        hideReport: function() {
            this.set("alert.visible", false);
        },

        data: {
            alert: {
                visible: false,
                message: null,
                type: null
            },
            tabs: [],
            template: ''
        }

    });
})(window, Services.EventProxy, Services.Alert, key);