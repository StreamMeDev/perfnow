/* global describe, it */
var assert = require('assert');
var now = require('../');

describe('perfnow', function () {
	it('should export a function that returns a number of miliseconds', function () {
		assert.equal(typeof now, 'function');
		assert.equal(typeof now(), 'number');
	});
});
