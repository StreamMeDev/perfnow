var _global = typeof window !== 'undefined' ? window : process;
var _start;

if (_global.performance && _global.performance.now) {
	// In the browser with support
	module.exports = perfNow;
} else {
	// In node use hrtime
	_start = nano();
	module.exports = perfNowNode;
}

function perfNow () {
	return _global.performance.now();
}

function perfNowNode () {
	return (nano() - _start) / 1e6;
}

function nano () {
	var hr = _global.hrtime();
	return hr[0] * 1e9 + hr[1];
}
