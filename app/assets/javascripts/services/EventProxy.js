(function(globalDispatcher, Services, $) {
    "use strict";

    function EventProxy(el, lang) {
        if ( EventProxy.prototype._singletonInstance ) {
          return EventProxy.prototype._singletonInstance;
        }
        EventProxy.prototype._singletonInstance = this;
    }

    EventProxy.prototype = {
        fire: function(event, params, element) {
            $(globalDispatcher).trigger(event, params);
        },

        on: function(event, callback) {
            $(globalDispatcher).on(event, callback);
        }
    };

    Services.EventProxy = new EventProxy();
})(window.document, Services, $);