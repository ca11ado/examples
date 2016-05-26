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

let merge = _.merge(firstCollection, secondCollection);
console.log(merge);