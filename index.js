'use strict';
require('babel-register');
let _ = require('lodash');
let Handlebars = require('handlebars');


Handlebars.registerHelper('rz', function (context, options) {
  console.log('Handlebars registerHelper');
  console.log(context);
  //console.log(options);
  //console.log(this);
  let result = _.reduce(context, (summ, letter) => {
    return summ + letter + ' ';
  }, '');
  return result;
});

var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
  "{{kids.length}} kids:</p>" +
  "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>" +
  "{{{widthHtml}}}" +
  "{{#rz name}}{{/rz}}";

var template = Handlebars.compile(source);
var data = {
  name: "Alan",
  widthHtml: "<div>with HTML</div>",
  hometown: "Somewhere, TX",
  kids: [{ name: "Jimmy", age: "12" }, { name: "Sally", age: "4" }]
};
var result = template(data);

console.log('---- result');
console.log(result);