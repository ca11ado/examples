'use strict';
require('babel-register');
let _ = require('lodash');

let prom1 = new Promise((res) => {
  res('t');
});

let prom2 = new Promise((res) => {
  res('0');
});

let prom3 = new Promise((res) => {
  res('s');
});

let promE = new Promise((res, rej) => {
  rej('error');
});

Promise.all([prom1, prom2, prom3])
  .then((results) => {
    console.log('----------------- all success');
    console.log(results.join(''));
  })
  .catch((e) => console.log(e));


Promise.all([prom1, prom2, prom3, promE])
  .then((results) => {
    console.log(results.join(''));
  })
  .catch((e) => {
    console.log('----------------- all error');
    console.log(e)
  });

let upperPromse = new Promise((res, rej) => {
  res();
});
upperPromse
  .then(() => {
    console.log('----------------- chain of promises');
  })
  .catch();
