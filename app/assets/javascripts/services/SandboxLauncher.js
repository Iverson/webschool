"use strict";

var Mustache = require('mustache.js/mustache');
var EventProxy = require('./EventProxy');

function SandboxLauncher(el, lang) {
}

SandboxLauncher.prototype = {
    run: function(files, practice, iframe) {
        var mode = "iframeModeRun";

        this[mode](files, practice, iframe);

    },

    iframeModeRun: function(files, practice, iframe) {
        var iframe_document = iframe.contentWindow.document;
        var content = Mustache.render(JST['templates/practice/iframe'](), {
            cource_assets_path: practice.courcePath(),
            practice_assets_path: practice.practicePath(),
            files: files
        });

        iframe.contentWindow.EventProxy = EventProxy;

        iframe_document.open();
        iframe_document.write(content);
        iframe_document.close();
    }
};

module.exports = new SandboxLauncher();