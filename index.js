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

let testCollection2 = [
  { id: 1, address: 'Moscow', isNew: false, checkedAt: 1234, response: { code: 200 } },
  { id: 2, address: 'Moscow', isNew: false, checkedAt: 1234, response: { code: 200 } },
  { id: 3, address: 'Moscow', isNew: false, checkedAt: 1234, response: { code: 200 } },
  { id: 4, address: 'Moscow', isNew: false, checkedAt: false, response: { code: 200 } },
  { id: 5, address: 'Moscow', isNew: true, checkedAt: null, response: { code: 200 } }
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

console.log(` find test ------------`);
let findTest = _.chain(testCollection)
  .find({ id: 2 })
  .value();
console.log(findTest);

console.log(` math ceil ------------`);
console.log(_.ceil(43.02));

console.log(` creating array ------------`);
var myArray = _.chain(new Array(_.ceil(99 / 10)))
  .map((val, index) => 'test' + index)
  .value();
console.log(myArray);

console.log(` every ------------`);
let testEvery = _.every(testCollection2, { response: { code: 200 } });
console.log(testEvery);