//= require jasmine/lib/jasmine-core/jasmine
//= require jasmine/lib/jasmine-core/jasmine-html
//= require jasmine/lib/jasmine-core/boot
//= require jasmine-jsreporter-real
//= require lib/jasmine-jsreporter.patch
//= require_self

(function(global, EventProxy, jasmine) {
    "use strict";

    global.EventProxy = EventProxy;
    var reporter = new jasmine.JSReporter2();

    reporter.afterDone(function() {
        EventProxy.fire('sandboxExecuted', jasmine.jsReport);

        var html_reporter_el = document.querySelector('.jasmine_html-reporter');

        if (html_reporter_el) {
            html_reporter_el.parentNode.removeChild(html_reporter_el);
        }
    });

    jasmine.getEnv().addReporter(reporter);

})(window, window.EventProxy, jasmine);