"use strict";

function Helper(el, lang) {
}

Helper.prototype = {
    reverse: function(string) {
        return string.split("").reverse().join("");
    }
};

module.exports = new Helper();