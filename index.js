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

let { checked: test } = { checked: true, someElse: false };

console.log(test);

function destr ({ checked: status }) {
  return status;
}

console.log(destr({ checked: true }));

console.log('default values in destructuring ------------');

let testObject = { firstValue: 'one', secondValue: 'two', thirdValue: 'three' };
let { firstValue2  = 'firstValue2'} = testObject;
console.log(firstValue2);


let promise = new Promise((res, rej) => res({ data: 2 }));
promise
  .then(({ data2 = { defValue: 1 } }) => {
    console.log(' ------------ default values in destructuring with promises');
    console.log(data2);
  });
