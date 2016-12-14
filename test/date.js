/* global describe, it */
var assert = require('assert');
var now = require('../date');

describe('date', function () {
	it('should start near 0', function () {
		var n = now();
		assert(n < 2000, n + ' is not below 2000');
	});
	it('should return a positve value', function () {
		var n = now();
		assert(n > 0, n + ' is not positive');
	});
	it('should increase in subsequent calls', function () {
		var n1 = now();
		var n2 = now();
		// This one might be equal, because date is not accurate
		assert(n1 <= n2, n1 + ' is not less than ' + n2);
	});
	it('should be in milliseconds to a maximum accuracy of 1/1000 of a millisecond', function () {
		var n = now();
		assert.equal(n, Math.round(n * 1000) / 1000);
	});
	it('should be fast like lightning', function () {
		var n1 = now();
		var n2 = now();
		var diff = n1 - n2;

		assert(diff < 0.01, diff + ' was not less than 0.01');
	});
	it('should be accurate', function (done) {
		var n = now();
		setTimeout(function () {
			var d = now() - n;
			assert(d > 999, d + ' was below 999');
			assert(d < 1020, d + ' was above 1020');
			done();
		}, 1000);
	});
});
