'use strict';
require('babel-register');

import times from 'lodash/times';
import flow from 'lodash/fp/flow';
import take from 'lodash/fp/take';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';

const add = v => {
  console.log('add func');
  return v + v;
};
const onlyOdd = v => {
  console.log('odd filter');
  return v % 2 === 0;
};

const arr = times(200);

const result = flow(
  map(add),
  filter(onlyOdd),
  take(3),
)(arr);

console.log(result);