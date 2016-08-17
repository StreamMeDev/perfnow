# A `performance.now` wrapper for node and browser support

[![NPM Version](https://img.shields.io/npm/v/@streammedev/perfnow.svg)](https://npmjs.org/package/@streammedev/perfnow)
[![NPM Downloads](https://img.shields.io/npm/dm/@streammedev/perfnow.svg)](https://npmjs.org/package/@streammedev/perfnow)
[![Build Status](https://api.travis-ci.org/StreamMeDev/perfnow.svg?branch=master)](https://travis-ci.org/streammedev/perfnow)
[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg)](https://github.com/JedWatson/happiness)

Wraps `performance.now` and `process.hrtime` to provide a consistent interface for performance timing.  This module is
based off [work here](https://github.com/myrne/performance-now) but drops support for older browsers (less than IE11) 
and is not written in coffeescript.

## Install

```
$ npm install --save @streammedev/perfnow
```

## Usage

```javascript
var now = require('@streammedev/perfnow');

var start = now();
setTimeout(function () {
	console.log('This operation took ' + (now() - start) + 'ms');
}, 1000);
```

## Development

This package follows semver, when you wish to publish a version run the proper npm command.  For example, if we made a bug fix you can do this:

```
$ npm version patch
$ git push
$ npm publish
```

Here are the other types of version bumps:

- Major (`npm version major`): This is for breaking changes. Anytime a method is changed or the functionality is modified this bump should be made.
- Minor (`npm version minor`): This is for features additions. When a new method is added which doesn't affect the behavior of existing features, this bump should be made.
- Patch (`npm version patch`): This is for bug fixes. Only bump this if it is safe for production code to update wihout being QA'd.  (AKA, almost never)

For each of these you can run a 'pre' version by prepending to the command, ex `npm version preminor`.

All feature development should be done on a branch off `master`.  When a feature is complete and the pull request approved, 
publish a 'pre' version of the package for testing across environments.  To install that 'pre' version of the package do 
the following, where the verison number contains the correct 'pre' version:

```
$ npm install --save @streammedev/perfnow@1.0.0-0
```

Running the tests:

```
$ npm install && npm test
```
