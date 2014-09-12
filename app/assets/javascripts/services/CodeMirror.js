(function(Services, CodeMirror) {

    var LINE_NUMBERS = true,
        AUTO_CLOSE_BRACKETS = true;

    Services.CodeMirror = function(el, lang) {
        return CodeMirror.fromTextArea(el,
        {
            lineNumbers: LINE_NUMBERS,
            mode: lang,
            autoCloseBrackets: AUTO_CLOSE_BRACKETS,
        });
    };
    
})(Services, CodeMirror);
