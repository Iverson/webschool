(function(global, Services, CodeMirror, Key) {
    "use strict";

    var LINE_NUMBERS = true,
        AUTO_CLOSE_BRACKETS = true,
        KEY_MAP = "sublime";

    Services.CodeMirrorFactory = function(el, lang) {
        return CodeMirror.fromTextArea(el,
        {
            lineNumbers: LINE_NUMBERS,
            mode: lang,
            autoCloseBrackets: AUTO_CLOSE_BRACKETS,
            keyMap: KEY_MAP,
            extraKeys: {
                "Shift-Enter": function (instance, ev) {
                    Services.EventProxy.fire('sandboxExec');
                }
            }
        });
    };
    
})(window, Services, CodeMirror, key);
