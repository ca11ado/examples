'use strict';
require('babel-register');

function ZipCode(code, location) {
  var _code = code;
  var _location = location || '';

  return {
    code: function () {
      return _code;
    },
    location: function () {
      return _location;
    },
    fromString: function (str) {
      var parts = str.split('-');
      return ZipCode(parts[0], parts[1]);
    },
    toString: function () {
      return _code + '-' + _location;
    }
  };
}

const prinsetonZip = ZipCode('08544', 3345);
console.log(prinsetonZip.toString());
prinsetonZip.code();
console.log(prinsetonZip.toString());