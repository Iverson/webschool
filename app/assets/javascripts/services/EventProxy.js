"use strict";

var globalDispatcher = window.document;

function EventProxy(el, lang) {
}

EventProxy.prototype = {
    fire: function(event, params, element) {
        $(globalDispatcher).trigger(event, params);
    },

    on: function(event, callback) {
        $(globalDispatcher).on(event, callback);
    }
};

module.exports = new EventProxy();