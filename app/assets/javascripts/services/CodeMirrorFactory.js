"use strict";

var _ = require('lodash/dist/lodash.compat');
var EventProxy = require('./EventProxy');

var LINE_NUMBERS = true,
AUTO_CLOSE_BRACKETS = true,
MODES_WITH_LINT = ['js'],
KEY_MAP = "sublime",
LANGS_MAP = {
    'js': 'text/javascript',
    'css': 'text/css',
    'html': 'text/html'
};

var CodeMirrorFactory = function(el, lang) {
    var is_lint = _.include(MODES_WITH_LINT, lang);

    var instance = CodeMirror.fromTextArea(el,
    {
        lineNumbers: LINE_NUMBERS,
        mode: (LANGS_MAP[lang] || ("text/" + lang)),
        autoCloseBrackets: AUTO_CLOSE_BRACKETS,
        keyMap: KEY_MAP,
        extraKeys: {
            "Shift-Enter": function (instance, ev) {
                EventProxy.fire('sandboxExec');
            }
        },
        gutters: ["CodeMirror-lint-markers"],
        lint: is_lint
    });

    if (is_lint && (instance._handlers.change[0].name == "onChange")) {
        var lint_onchange_callback = instance._handlers.change[0];

        instance.on('validate', lint_onchange_callback);
        instance.off('change', lint_onchange_callback);
    }

    return instance;
};

module.exports = CodeMirrorFactory;