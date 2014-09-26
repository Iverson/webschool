var CodeMirrorFactory = require('../../services/CodeMirrorFactory');

Ractive.components.Codearea = Ractive.extend({
    template: JST['templates/components/codearea'](),
    init: function () {
        var self = this;

        this._textarea = this.find('.b-codearea');
        this._codeMirror = CodeMirrorFactory(this._textarea, this.get('lang'));

        this.on('refresh', function() {
            this._codeMirror.refresh();
        });

        this._parent.on('selectTab', function() {
            self.fire('refresh');
        });
    },
    value: function() {
        return this._codeMirror.doc.getValue();
    },
    isValid: function() {
        CodeMirror.signal(this._codeMirror, 'validate', this._codeMirror);
        
        return !this._codeMirror.state.lint || !this._codeMirror.state.lint.marked.length;
    },
    data: {

    }
});