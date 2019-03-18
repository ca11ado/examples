/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction c(text) {\n  console.log('>>', text, '<<');\n}\n\nfunction cache(func) {\n  var inputs = [];\n  var results = [];\n\n  return function () {\n    var currentArg = JSON.stringify(arguments);\n    var reducer = function reducer(accum, current, index) {\n      console.log('current', current, currentArg, currentArg === current, accum === false);\n      return currentArg === current && accum === false ? index : accum;\n    };\n    var cachedIndex = inputs.reduce(reducer, false);\n    var wasCached = typeof cachedIndex === 'number';\n\n    if (!wasCached) {\n      results.push(func.apply(null, arguments));\n      inputs.push(currentArg);\n    }\n\n    return results[wasCached ? cachedIndex : results.length - 1];\n  };\n}\n\nfunction sumObjects(a, b) {\n  c('was called');\n  return a.n + b.n;\n}\n\nfunction sumArr(a, b) {\n  c('was called');\n  var red = function red(accum, current) {\n    return accum + current;\n  };\n  return a.reduce(red, 0) + b.reduce(red, 0);\n}\n\nfunction sumArrObj(a, b) {\n  c('was called');\n  var red = function red(accum, current) {\n    return accum + current.number;\n  };\n  return a.reduce(red, 0) + b.reduce(red, 0);\n}\n\nfunction singleArg(a) {\n  c('was called');\n  return a.split(',').join();\n}\n\nfunction fooBarBaz(a) {\n  c('was called');\n  return a.join('-');\n}\n\n/*\nconst cached = cache(sumObjects);\nconsole.log(cached({ n: 3 }, { n: 1}));\nconsole.log(cached({ n: 3 }, { n: 1}));\nconst cachedArr = cache(sumArr);\nconsole.log(cachedArr([1,2,3], [3,4,5]));\nconsole.log(cachedArr([1,2,3], [3,4,5]));\nconst cachedArrObj = cache(sumArrObj);\nconsole.log(cachedArrObj([{ number: 1 }, { number: 2 }], [{ number: 6 }, { number: 7 }]));\nconsole.log(cachedArrObj([{ number: 1 }, { number: 2 }], [{ number: 6 }, { number: 7 }]));\nconst cachedSingleArg = cache(singleArg);\nconsole.log(cachedSingleArg('foo'));\nconsole.log(cachedSingleArg('foo'));\n*/\n\nconsole.log('section foo bar baz');\nvar cachedFooBarBaz = cache(fooBarBaz);\nconsole.log(cachedFooBarBaz(['foo', 'bar', 'baz']));\nconsole.log(cachedFooBarBaz(['foo', 'bar', 'bas']));\nconsole.log(cachedFooBarBaz(['foo', 'bar', 'baz']));\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });