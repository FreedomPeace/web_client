var require2 = require("./module");//exports
var module2 = require("./module2");//exports
var requireObj = require("./require_obj");

//
require2.Hello();
module2.Hello2();

var say = new requireObj();
say.sayHi();