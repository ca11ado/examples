'use strict';
require('babel-register');

class MyNewClass {
  constructor (name) {
    this.name = name;
  }

  showName () {
    return this.name;
  }

  showGreetName () {
    console.log(this.greet(this.name));
  }

  /*static greet (text) {
    return `Greet ${text}`;
  }*/

  greet (text) {
    return `Greet ${text}`;
  }

  get PATHS () {
    return {
      path1: '1',
      path2: '2'
    }
  }
}


let myName = new MyNewClass('t0s');

myName.showName();
myName.showGreetName();

class MyNextClass extends MyNewClass {
}

let myNextClass = new MyNextClass();

/*console.log('------------ test getter');
console.log(MyNewClass.PATHS);
console.log(myName.PATHS);*/

console.log('------------ show now');
console.log(myNextClass.showName());