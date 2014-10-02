'use strict';

window.$ = require('jquery/dist/jquery');
var EventProxy = require('../../../services/EventProxy');


describe('EventProxy service', function() {
    var callback;

    beforeEach(function() {
        callback = jasmine.createSpy('customEventCallback');

        EventProxy.on('customEvent', callback);
    });

    it('call event callback', function() {
        EventProxy.fire('customEvent');

        expect(callback).toHaveBeenCalled();
    });
});