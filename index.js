'use strict';
require('babel-register');
let _ = require('lodash');

let firstPromise = new Promise((resolve, reject) => {
  let myObj = {
    one: 'one',
    two: 'two'
  };
  resolve(myObj);
});

let secondPromise = new Promise((resolve, reject) => {
  let myObj = {
    one: 'three',
    two: 'four'
  };
  reject('tttt');
  resolve(myObj);
});

let thirdPromise = new Promise((resolve, reject) => {
  let myObj = {
    one: 'six',
    two: 'seven'
  };
  resolve(myObj);
});

let beginPromise = new Promise((resolve, reject) => {
  resolve('begin promise');
});

beginPromise
  .then((response) => {
    Promise.all([firstPromise, secondPromise])
      .then((responses) => {
        console.log('success response');
      })
      .catch((e) => {
        console.log(e);
      })
  })
  .catch((e) => console.log(`error begin level ${e}`));