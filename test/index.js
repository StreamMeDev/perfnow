/* global describe, it */
var assert = require('assert');
var now = require('../');

describe('perfnow', function () {
	it('should start near 0', function () {
		assert(now() < 20);
	});
	it('should return a positve value', function () {
		assert(now() > 0);
	});
	it('should increase in subsequent calls', function () {
		assert(now() < now());
	});
	it('should be fast like lightning', function () {
		assert(Math.abs(now() - now()) < 0.005);
	});
	it('should be accurate', function (done) {
		var n = now();
		setTimeout(function () {
			var d = now() - n;
			assert(d > 999);
			assert(d < 1020);
			done();
		}, 1000);
	});
});
