var _start = Date.now();
module.exports = function perfNowDate () {
	return Date.now() - _start;
};
