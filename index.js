'use strict';
require('babel-register');
let Handlebars = require('handlebars');

var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
  "{{kids.length}} kids:</p>" +
  "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>" +
  "{{{widthHtml}}}";

var template = Handlebars.compile(source);

var data = {
  name: "Alan",
  widthHtml: "<div>with HTML</div>",
  hometown: "Somewhere, TX",
  kids: [{ name: "Jimmy", age: "12" }, { name: "Sally", age: "4" }]
};
var result = template(data);

console.log(result);