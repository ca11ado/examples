'use strict';
require('babel-register');

let myPromise = new Promise((resolve, reject) => {
  let myObj = {
    one: 'one',
    two: 'two'
  };
  resolve(myObj);
});


myPromise
  .then((res) => {
    console.log(res);
    return res;
  })
  .then(res => {
    console.log(res);
  });