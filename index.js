'use strict';
require('babel-register');

function negate(func) { //#A
  return function() {
    //return !func.apply(null, arguments); //#B
    //console.log(arguments);
    return !func(arguments[0]); //#B
  };
}
function isNull(val) { //#C
  console.log(val);
  return val === null;
}
var isNotNull = negate(isNull); //#D
isNotNull(null); //-> false
isNotNull({});   //-> true»

console.log(isNotNull(null));
console.log(isNotNull({}));