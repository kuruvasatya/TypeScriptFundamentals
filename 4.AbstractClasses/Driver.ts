import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";


let circle = new Circle(1, 1, 7);
let rectangle = new Rectangle(5, 5, 8, 8);
let shapes: Shape[] = [];

shapes.push(circle);
shapes.push(rectangle);

for( let shape of shapes) {
    console.log(shape.getInfo());
    console.log("Calculate Area is : " + shape.calculateArea());
}

