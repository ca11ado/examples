import times from 'lodash/times';
import flow from 'lodash/fp/flow';
import take from 'lodash/fp/take';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';

/*
import { times } from 'lodash';
import { flow, take, map, filter } from 'lodash/fp';
*/
/*
import * as R from 'ramda';
*/
/*
import rMap from 'ramda/src/map';
import rTake from 'ramda/src/take';
import rPipe from 'ramda/src/pipe';
import rFilter from 'ramda/src/filter';
import rCompose from 'ramda/src/compose';
*/
import {
  map as rMap,
  take as rTake,
  pipe as rPipe,
  filter as rFilter,
  compose as rCompose
} from 'ramda/src';

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
rPipe(
  rMap(add),
  rFilter(onlyOdd),
  rTake(3),
);

trace.setName('ramda compose');
rCompose(
  rTake(3),
  rFilter(onlyOdd),
  rMap(add)
);

const addTwo2 = R.compose(R.tap(() => trace.countFuncExecution('add two')), addTwo);
const addOne2 = R.compose(R.tap(() => trace.countFuncExecution('add one')), addOne);
trace.setName('ramda compose only map');
rCompose(
  rTake(3),
  rMap(addTwo2),
  rMap(addOne2)
)(arr);

trace.show();
