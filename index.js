'use strict';
require('babel-register');

var _ = require('lodash');
var moment = require('moment');

var format = 'DD.MM.YYYY';
var date4 = '02.04.2015';
var SPLIT_DATE = '01.07.2015';


/*console.log('---');
console.log(moment(date4, format) > moment(SPLIT_DATE, format));
console.log(moment(date4, format) < moment(SPLIT_DATE, format));*/

for (let i=1; i < 31; i++) {
  console.log(moment(`${i}.07.2015`, format) < moment(SPLIT_DATE, format));
} 