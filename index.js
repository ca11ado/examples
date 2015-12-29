'use strict';
require('babel-register');

class MyNewClass {
  constructor (name) {
    this.name = name;
  }

  showName () {
    console.log(this.name);
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
}


let myName = new MyNewClass('t0s');

myName.showName();
myName.showGreetName();

class MyNextClass extends MyNewClass {
  showAge () {
    super.showName();
  }
}

let myNextClass = new MyNextClass(13);
myNextClass.showAge();