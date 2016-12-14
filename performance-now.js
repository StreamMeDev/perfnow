module.exports = function perfNow () {
	return Math.round(window.performance.now() * 1000) / 1000;
};
