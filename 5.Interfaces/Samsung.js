"use strict";
exports.__esModule = true;
exports.Samsung = void 0;
var Samsung = /** @class */ (function () {
    function Samsung() {
    }
    Samsung.prototype.call = function (contact_number) {
        console.log("calling number " + contact_number + " ..........");
    };
    Samsung.prototype.text = function (contact_number, message) {
        console.log("texting " + contact_number + " ...........");
        console.log(message);
    };
    Samsung.prototype.getDetails = function () {
        console.log("I am Samsung s6 mobile");
    };
    return Samsung;
}());
exports.Samsung = Samsung;
