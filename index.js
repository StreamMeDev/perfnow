var _win = typeof window !== 'undefined' ? window : null;
var _pro = typeof process !== 'undefined' ? process : null;
var _start;

if (_win && _win.performance && _win.performance.now) {
	// In the browser with support
	module.exports = perfNow;
} else if (_pro && _pro.hrtime) {
	// In node use hrtime
	_start = nano();
	module.exports = perfNowNode;
} else {
	// fall back to simple data
	_start = Date.now();
	module.exports = perfNowDate;
}

function perfNow () {
	return _win.performance.now();
}

function perfNowNode () {
	return (nano() - _start) / 1e6;
}

function perfNowDate () {
	return Date.now() - _start;
}

function nano () {
	var hr = _pro.hrtime();
	return hr[0] * 1e9 + hr[1];
}
