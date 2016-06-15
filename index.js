'use strict';
require('babel-register');
var _ = require('lodash');

let http = 'httpx:////////////2gis.ru';
let http2 = 'http://localhost';
let http3 = 'http://';

const REG = /^(.+\/)?(.+\..+)$/;
const PROTOCOL = /.+?:\/\//;
const BODY = /^(?!\/+?|\.+?|:+?).+\..+$/;

let result = http3.match(REG);

console.log(result);

if (result) {
  let [, protocol = '', body = ''] = result;

  console.log(protocol, '    ', body);
  console.log(PROTOCOL.test(protocol));
  console.log(BODY.test(body));  
}
