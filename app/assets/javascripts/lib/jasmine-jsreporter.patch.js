jasmine.JSReporter2.__doneCallback = function() {};
jasmine.JSReporter2.prototype.__super__jasmineDone = jasmine.JSReporter2.prototype.jasmineDone;
jasmine.JSReporter2.prototype.jasmineDone = function() {
    jasmine.JSReporter2.prototype.__super__jasmineDone.apply(this, arguments);
    this.__doneCallback();
};
jasmine.JSReporter2.prototype.afterDone = function(callback) {
    if (typeof callback !== 'function') {
        return false;
    }
    
    this.__doneCallback = callback;
};