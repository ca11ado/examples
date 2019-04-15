'use strict';
require('babel-register');

// FIRST VARIANT OF USING CLOSURES: OBJECTS WITH PRIVATE DATA
// Simple object without closure and private data
const object = {
  name: 'My simple object',
  getName: function () {
    return this.name;
  }
};

// Object with closure and private data
const closuredObject = (() => {
  const name = 'my secret name';
  return {
    getName: () => name,
  };
})();

// SECOND VARIANT OF USING CLOSURES: STATEFULL FUNCTIONS
const counter = (function () {
  let count = 0;
  return () => ++count;
})();


console.log('>>>> this object has not private data');
console.log(object.name);
console.log(object.getName());

console.log('>>>> this object has private data');
console.log(closuredObject.getName());

console.log('>>>> this function has internal state');
console.log(counter());
console.log(counter());
