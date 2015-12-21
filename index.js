'use strict';
require('babel-register');
let _ = require('lodash');

let myPromise = new Promise((resolve, reject) => {
  let myObj = {
    one: 'one',
    two: 'two'
  };
  resolve(myObj);
});


myPromise
  .then((res) => {
    //console.log(res);
    return res;
  })
  .then(res => {
    //console.log(res);
  });


let partObj = {
  ficus: {
    code: 200
  }
};


let mySecondPromise = new Promise((resolve, reject) => {
  let myObj = {
    one: 'one',
    two: 'two',
    code: 200
  };
  resolve(myObj);
});

mySecondPromise
  .then(_.partialRight(checkStatus, partObj))
  .then(res => {
    console.log(res);
  });


function checkStatus(data) {
  console.log(arguments);
  if (_.get(data, ['status', 'code']) == 200) {
    data.status.code = 400;
  }
  return data;
}