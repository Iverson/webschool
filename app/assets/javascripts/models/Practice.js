"use strict";

var _ = require('lodash/dist/lodash.compat');

var DEFAULT_OPTIONS = {
    cource: null,
    level: null,
    example: null
};
var ASSETS_PREFIX = '/assets/practice/';

function Practice(options) {
    var options = options || {};

    this.attributes = _.extend(DEFAULT_OPTIONS, options);

}

Practice.prototype = {
    courcePath: function() {
        return ASSETS_PREFIX + this.attributes.cource;
    },

    practicePath: function() {
        return this.courcePath() + "/level" + this.attributes.level + "/example" + this.attributes.example;
    },

    configPath: function() {
        return this.practicePath() + "/data.json";
    },

    filePath: function(file) {
        return this.practicePath() + "/files/" + file;
    }
};

module.exports = Practice;