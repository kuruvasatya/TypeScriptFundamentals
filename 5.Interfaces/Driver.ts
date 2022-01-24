import { Nokia } from "./Nokia";
import { Samsung } from "./Samsung";

let nokia = new Nokia();
let samsung = new Samsung();

nokia.call(9182011376);
nokia.getDetails();
nokia.text(9182011376, "hello how are you")
