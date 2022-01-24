"use strict";
exports.__esModule = true;
var Nokia_1 = require("./Nokia");
var Samsung_1 = require("./Samsung");
var nokia = new Nokia_1.Nokia();
var samsung = new Samsung_1.Samsung();
nokia.call(9182011376);
nokia.getDetails();
nokia.text(9182011376, "hello how are you");
