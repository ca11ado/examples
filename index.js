'use strict';
require('babel-register');
var _ = require('lodash');

// --harmony_destructuring

let firstCollection = [
  { city: 'Moscow', items: [{ address: 'Lenina 1' }, { address: 'Lenina 2' }] },
  { city: 'Piter', items: [{ address: 'Marks 1' }, { address: 'Marks 2' }] }
];

let secondCollection = [
  { city: 'Moscow', items: [{ address: 'Lenina 3' }, { address: 'Lenina 4' }] },
  { city: 'Piter', items: [{ address: 'Marks 3' }, { address: 'Marks 4' }] }
];
let thirdCollection = [
  { city: 'Moscow', items: [{ address: 'Lenina 5' }, { address: 'Lenina 6' }] },
  { city: 'Piter', items: [{ address: 'Marks 5' }, { address: 'Marks 6' }] },
  { city: 'Himki', items: [{ address: 'Stalina 1' }, { address: 'Stalina 2' }] }
];

let tObject = {
  one: 1,
  two: 2
};

_.defer(() => {
  console.log('DEFER');
});

console.log(tObject);
console.log(_.reject(tObject, ({ one }) => Boolean(one)));
console.log(_.omit(tObject, 'one'));

let counter = 0;
for (let i=0; i<1000000000; i++) {
  counter = counter + i;
}

console.log('for i', counter);