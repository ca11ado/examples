'use strict';
require('babel-register');

var R = require('ramda');

var someArray = [1, 2, 3, 4, 5, 6];

// MAP

var double = (a) => a*a;
var testMap = R.map(double, someArray);
console.log(testMap);

var doubleAccum = (a, b) => [a*b, a*b];
var testAccumMap = R.mapAccum(doubleAccum, 1, someArray);
console.log(testAccumMap);

// REDUCE

var summReduce = (a, b) => a + b;
var testReduce = R.reduce(summReduce, 0, someArray);
console.log(testReduce);