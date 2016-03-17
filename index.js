'use strict';
require('babel-register');
var _ = require('lodash');

var providers = [ { code: '2gis', isVisible: false },
  { code: 'user', isVisible: true },
  { code: 'vk', isVisible: true },
  { code: '2gis_owner', isVisible: false },
  { code: 'flamp', isVisible: true } ];

var owner = _.find(providers, { code: '2gis_owner' });
var other = _.reject(providers, { code: '2gis_owner' });

var items = _.chain([{ code: 'all' }])
  .concat(owner || [])
  .compact()
  .map((prov) => _.assign(prov, { isOwner: true }))
  .concat(other)
  .value();

var objWithFalseProp = {
  test: 11,
  test2: false
};

//console.log(_.has(objWithFalseProp, 'test2'));
//console.log(_.isUndefined(objWithFalseProp.test2));

var obj2 = {
  value: 1,
  description: null
};

//console.log(typeof _.get(obj2, 'description', ''));
//console.log(_.isEmpty(obj2.description));

var arr1 = [
  { name: 'tt', val: 1 },
  { name: 'dd', val: 2 }
];

_.map(arr1, (v, d) => {
  /*console.log(v);
  console.log(d);*/
});


/*
  _.omit && _.isUndefined
 */

let obj = {
  prop1: { value: 3 },
  prop2: { value: 4 },
  prop3: undefined,
  undefined: 1
};

//console.log(obj);

obj = _.chain(obj)
  .omit(_.isUndefined)
  .omit('undefined')
  .value();

//console.log(obj);

var arr2 = [
  {value: 'val1'},
  {value: 'val2'},
  {value: 'val3'}
];

var isHidden = 'hidden';

var arrEcho = _.chain(arr2)
  .reduce(_.partial(tttt, isHidden), {})
  .value();

function tttt(isHidden, result, value) {
  console.log(isHidden, result, value);
  result[value.value] = 'ttt';
  return result;
}

console.log(arrEcho);