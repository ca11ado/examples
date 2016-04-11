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

let intersectionCollection = [
  {
    status: {
      code: 200
    },
    content: {
      result: {
        items: [
          { id: 1, address: 'Moscow', isNew: false, checkedAt: 1234, response: { code: 200 } },
          { id: 2, address: 'Moscow', isNew: false, checkedAt: 1234, response: { code: 200 } }
        ]
      }
    }
  },

  {
    status: {
      code: 200
    },
    content: {
      result: {
        items: [
          { id: 1, address: 'Piter', isNew: false, checkedAt: 1234, response: { code: 200 } },
          { id: 2, address: 'Piter', isNew: true, checkedAt: 1234, response: { code: 200 } }
        ]
      }
    }
  }
];

console.log(` reduce ------------`);
let testIntersection = _.chain(intersectionCollection)
  .reduce((result, value, key) => {
    var items = _.get(value, 'content.result.items');
    return [ ...result, ...items];
  }, [])
  .find({ isNew: true })
  .value();
console.log(testIntersection);

console.log(` filter ------------`);
let testFilter = _.chain(testCollection)
  .filter({ id: 10 })
  .head()
  .pick(['address'])
  .value();

console.log(_.isEmpty(testFilter));
