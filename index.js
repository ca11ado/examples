'use strict';
require('babel-register');
require('babel-polyfill');

// !!!need to use flag --harmony_destructuring with node!!!

//checkDestr({one: 'one', two: 'two', second: 'second'});
let { one, two } = {one: 'one', two: 'two', second: 'second'};
console.log(one, two);

function checkDestr ({ one, two }) {
  console.log(one, two);
}

var { checked: test } = { checked: true, someElse: false };

console.log(test);

function destr ({ checked: status }) {
  return status;
}

console.log(destr({ checked: true }));