"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var circle = new Circle_1.Circle(1, 1, 7);
var rectangle = new Rectangle_1.Rectangle(5, 5, 8, 8);
var shapes = [];
shapes.push(circle);
shapes.push(rectangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.getInfo());
    console.log("Calculate Area is : " + shape.calculateArea());
}
