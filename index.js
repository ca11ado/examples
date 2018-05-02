'use strict';
require('babel-register');

import times from 'lodash/times';
import flow from 'lodash/fp/flow';
import take from 'lodash/fp/take';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';
import * as R from 'ramda';

class Trace {
  constructor () {
    this.trace = {};
    this.name = '';
  }

  setName (name) {
    this.name = name;
  }

  countFuncExecution (funcName) {
    const name = this.name || 'default';
    if (!this.trace[name]) {
      this.trace[name] = {};
    }

    this.trace[name][funcName] = this.trace[name][funcName]
      ? ++this.trace[name][funcName]
      : 1;
  }

  show () {
    R.forEachObjIndexed((value, key) => {
      console.log(`<Trace ${key}>`);
      R.forEachObjIndexed((v, k) => {
        console.log(`function: ${k} has ${v}`);
      }, value);
    }, this.trace);
  }
}

const arr = times(200);
const trace = new Trace();

const add = a => b => a + b;
const addOne = add(1);
const addTwo = add(2);
const onlyOdd = v => v % 2 === 0;

flow(
  map(add),
  filter(onlyOdd),
  take(3),
);

trace.setName('ramda pipe');
R.pipe(
  R.map(add),
  R.filter(onlyOdd),
  R.take(3),
);

trace.setName('ramda compose');
R.compose(
  R.take(3),
  R.filter(onlyOdd),
  R.map(add)
);

const addTwo2 = R.compose(R.tap(() => trace.countFuncExecution('add two')), addTwo);
const addOne2 = R.compose(R.tap(() => trace.countFuncExecution('add one')), addOne);
trace.setName('ramda compose only map');
R.compose(
  R.take(3),
  R.map(addTwo2),
  R.map(addOne2)
)(arr);

trace.show();
