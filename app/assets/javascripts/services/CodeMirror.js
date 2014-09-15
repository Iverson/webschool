(function(Services, CodeMirror) {

    var LINE_NUMBERS = true,
        AUTO_CLOSE_BRACKETS = true,
        KEY_MAP = "sublime";

    Services.CodeMirror = function(el, lang) {
        return CodeMirror.fromTextArea(el,
        {
            lineNumbers: LINE_NUMBERS,
            mode: lang,
            autoCloseBrackets: AUTO_CLOSE_BRACKETS,
            keyMap: KEY_MAP,
            // value: el.innerHTML
        });
    };
    
})(Services, CodeMirror);
