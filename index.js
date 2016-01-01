'use strict';
require('babel-register');
require('babel-polyfill');

//checkDestr({one: 'one', two: 'two', second: 'second'});
let { one, two } = {one: 'one', two: 'two', second: 'second'};
console.log(one, two);

function checkDestr ({ one, two }) {
  console.log(one, two);
}