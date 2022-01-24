import { Circle } from "./Circle"
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape"

let shape = new Shape(1, 2)
let circle  = new Circle(2, 2, 5);
let rectangle = new Rectangle(3,3,8,5);

console.log(shape.getInfo())
console.log(circle.getInfo())
console.log(rectangle.getInfo())
