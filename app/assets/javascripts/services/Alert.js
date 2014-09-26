"use strict";

function Alert(el, lang) {
}

Alert.prototype = {
    show: function(message, type) {
        type = type || "info";

        var popup = Mustache.render(JST['templates/services/alert'](), {message: message, type: type});
        $(global.document.body).append(popup);
    }
};

module.exprorts = new Alert();

