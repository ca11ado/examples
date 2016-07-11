'use strict';

let data = {
  license: true,
  emails: [ 'test@ya.ru', 'test@gmail.com', 'test@mail.ru']
};

let str = [];
for (let p in data) {
  str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
}
str = str.join('&');

let encodedData = encodeURIComponent(data);
let encoded2Data = encodeURI(data);

let emails = `["${data.emails.join('", "')}"]`;
let emails2 = JSON.stringify(data.emails);

console.log(emails);
console.log(emails2);