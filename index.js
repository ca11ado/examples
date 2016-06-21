'use strict';
require('babel-register');
let _ = require('lodash');

class Tree {
  constructor (state) {
    this._state = state;
  }

  _set (key, value) {
    let path = this.constructor.path(key);
    this._state.set(path, value);
  }
}

class Addresses extends Tree {
  constructor (state, monkey, limit) {
    super(state);
    this._monkey = monkey;
    this._limit = limit;
  }

  /**
   * Путь к инстансу в локаторе
   * @returns {string}
   */
  static get className () {
    return 'jungle.profile.isp.coverage.IspAddressesPageTree';
  }
}

class IspValidPageTree extends Addresses {
  className () {
    return super.constructor.className;
  }
  
  getMonkey () {
    return this._monkey;
  }
}

let isp = new IspValidPageTree('state', 'monkey', '1');

console.log(isp);
console.log(isp.className());
console.log(isp.getMonkey());