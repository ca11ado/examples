'use strict';
require('babel-register');
var _ = require('lodash');

// --harmony_destructuring

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

let testCollection3 = {
  headBranch: false,
  address: undefined,
  name: undefined,
  streen: undefined
};

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

console.log(` -------- let `);

let { headBranch, streen } = testCollection3;
console.log(headBranch, streen);

console.log(` -------- перебор `);
let number = 100;
let sNumber = number.toString();
let rNumber = _.reduceRight(sNumber, (prev, val, index) => {
  //console.log(prev, val, index);
  if ((index) % 3 === 0) {
    prev = ' ' + prev;
  }
  return val + prev;
}, '');
console.log(rNumber);

console.log(' --------- thousand separator');
function numberWithCommas(x) {
  /*return */x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
let nn = 100000;
console.log(numberWithCommas(nn));