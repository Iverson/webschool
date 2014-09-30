'use strict';

var Helper = require('../../services/Helper');


describe('Simple test', function() {

    it('true is atrue', function() {
        expect(Helper.reverse('qwerty')).toBe('ytrewq');
    });
});