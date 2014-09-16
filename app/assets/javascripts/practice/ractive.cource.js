//= require ractive
//= require_self

(function(global, EventProxy, jasmine) {
    "use strict";

    global.EventProxy = EventProxy;
    var reporter = new jasmine.JSReporter2();

    reporter.afterDone(function() {
        EventProxy.fire('sandboxExecuted', jasmine.jsReport);
    });

    jasmine.getEnv().addReporter(reporter);

})(window, window.parent.Services.EventProxy, jasmine);