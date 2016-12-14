if (typeof window !== 'undefined' && window.performance && window.performance.now) {
	// In the browser with support
	module.exports = require('./performance-now');
} else if (typeof process !== 'undefined' && process.hrtime) {
	// In node use hrtime
	module.exports = require('./hrtime');
} else {
	module.exports = require('./date');
}
