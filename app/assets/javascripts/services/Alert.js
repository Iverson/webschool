(function(global, Services, $) {
    "use strict";

    function Alert(el, lang) {
        if ( Alert.prototype._singletonInstance ) {
          return Alert.prototype._singletonInstance;
        }
        Alert.prototype._singletonInstance = this;
    }

    Alert.prototype = {
        show: function(message, type) {
            type = type || "info";

            var popup = Mustache.render(JST['templates/services/alert'](), {message: message, type: type});
            console.log(popup);
            $(global.document.body).append(popup);
        }
    };

    Services.Alert = new Alert();
    
})(window, Services, $);

