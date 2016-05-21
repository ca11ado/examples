'use strict';
require('babel-register');
let numbro = require('numbro');

let dg = 1000000000;
let format = '0 a';

console.log(numbro(dg).format(format));

