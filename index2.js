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

  addAddresses (addresses) {
    this.addresses = this.constructor.formatAddresses(addresses);
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
  className2 () {
    return super.constructor.className;
  }

  getMonkey () {
    return this._monkey;
  }

  static formatAddresses (addresses) {
    addresses = _.map(addresses, this.formatItem);
    return _.map(addresses, (address) => `${address} + 2`);
  }

  static formatItem (item) {
    return `${item} + 3`;
  }
}

module.exports = IspValidPageTree;