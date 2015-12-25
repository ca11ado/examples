'use strict';
require('babel-register');
var _ = require('lodash');

/* chain */

var namesWithData = [
  'one',
  'two',
  'three',
  'four',
  'six'
];

var data = {
  byName: {
    nextLevel: {
      one: 2
    },
    one: 1,
    two: 3,
    three: 5,
    four: 7
  },
  byRubric: {
    nextLevel: {
      one: 1
    },
    one: 1,
    two: 3,
    three: 5,
    four: 7
  }
};

var myObj = namesWithData.reduce((prev, current) => {
    prev[current] = 'test';
    return prev;
  }, {});

//console.log(myObj);

var summedData = _.chain(namesWithData)
  .reduce((result, n) => {
    result[n] = '';
    return result;
  }, {})
  .value();

var smallObj = {
  one: 1,
  nextLevel: {
    two: 2,
    one: 1
  },
  secondLevel: {
    one: 1,
    two: 2,
    byRubric: {
      one: 1,
      two: 2
    }
  },
  two: 2
};
console.log(summByKeyName('one', smallObj));

console.log(['one', 'two'].reduce((prev, current) => {
  prev[current] = summByKeyName(current, smallObj);
  return prev;
}, {}));

let summed = _.chain(['one', 'two'])
  .reduce((prev, current) => {
    prev[current] = summByKeyName(current, smallObj);
    return prev;
  }, {})
  .value();

console.log(summed);

console.log(summByKeyNames(['one', 'two'], smallObj));

console.log(summByKeyNames(['one', 'two'], smallObj, 'byRubric'));

function summByKeyName(keyName, source, excludePath) {
  return _.reduce(source, (result, val, key) => {
    if (key == excludePath) {
      return result;
    }
    if (typeof val == 'object') {
      return result + summByKeyName(keyName, val, excludePath);
    } else {
      return key == keyName ? result + val : result;
    }
  }, 0)
}

function summByKeyNames(keyNames, source, excludePath) {
  return _.reduce(keyNames, (result, n) => {
    result[n] = summByKeyName(n, source, excludePath);
    return result;
  }, {});

}