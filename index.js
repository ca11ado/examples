'use strict';
require('babel-register');
var _ = require('lodash');

let testCollection = [
  { id: 1, address: 'Moscow', isNew: false, checkedAt: 1234 },
  { id: 2, address: 'Moscow', isNew: false, checkedAt: 1234 },
  { id: 3, address: 'Moscow', isNew: false, checkedAt: 1234 },
  { id: 4, address: 'Moscow', isNew: false, checkedAt: false },
  { id: 5, address: 'Moscow', isNew: true, checkedAt: null }
];

let testObject = {
  testCollection
};

let result = _.chain(_.get(testObject, 'testCollection'))
  .filter({ isNew: false })
  .filter((item) => _.isFinite(_.get(item, 'checkedAt')))
  .size()
  .value();

console.log(result);

console.log(_.every(testCollection, { address: 'Moscow' }));

console.log(' ----------- ');
let pickTest = _.chain(testCollection)
  .filter({ id: 10 })
  .head()
  .pick('address')
  .value();

console.log(pickTest);

console.log(` reject test ------------`);

let rejectTest = _.chain(testCollection)
  .reject({ id: 2 })
  .value();
console.log(rejectTest);