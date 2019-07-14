/* Classical inherinace */

// first variant

function Person () {}
Person.prototype.walk = function () {
  return 'walking ...';
}

function Worker() {}
Worker.prototype = Object.create(Person.prototype);

Worker.prototype.work = function () {
  return 'working ....';
}

function Developer () {}
Developer.prototype = Object.create(Worker.prototype);
Developer.prototype.code = function () {
  return 'coding ....';
}

var dev = new Developer();
dev.code(); // 'coding ...'
dev.work(); // 'working ...'
dev.walk(); // 'walking ...'

// second variant
var person = {
  walk() { return 'walking...';}
};

var worker = Object.create(person);
worker.work = function () {
  return 'working';
}

var dev = Object.create(worker);
dev.code = function () {
  return 'coding...';
}
dev.code(); // 'coding ...'
dev.work(); // 'working ...'
dev.walk(); // 'walking ...'

