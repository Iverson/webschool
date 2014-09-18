(function(global, Services, CodeMirror, Key) {
    "use strict";

    var LINE_NUMBERS = true,
        AUTO_CLOSE_BRACKETS = true,
        MODES_WITH_LINT = ['text/javascript'],
        KEY_MAP = "sublime";

    Services.CodeMirrorFactory = function(el, lang) {
        var is_lint = _.include(MODES_WITH_LINT, lang);

        var instance = CodeMirror.fromTextArea(el,
        {
            lineNumbers: LINE_NUMBERS,
            mode: lang,
            autoCloseBrackets: AUTO_CLOSE_BRACKETS,
            keyMap: KEY_MAP,
            extraKeys: {
                "Shift-Enter": function (instance, ev) {
                    Services.EventProxy.fire('sandboxExec');
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
    
})(window, Services, CodeMirror, key);
