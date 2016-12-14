var _start = nano();
module.exports = function perfNowNode () {
	return Math.round((nano() - _start) / 1e6 * 1000) / 1000;
};

function nano () {
	var hr = process.hrtime();
	return hr[0] * 1e9 + hr[1];
}
