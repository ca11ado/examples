'use strict';
require('babel-register');

let data = {
  license: true
};

let str = [];
for (let p in data) {
  str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
}
str = str.join('&');

let encodedData = encodeURIComponent(data);
let encoded2Data = encodeURI(data);

let emails = `["${data.emails.join('", "')}"]`;

console.log(emails);