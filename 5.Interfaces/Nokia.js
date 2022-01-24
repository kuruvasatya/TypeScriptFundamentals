"use strict";
exports.__esModule = true;
exports.Nokia = void 0;
var Nokia = /** @class */ (function () {
    function Nokia() {
    }
    Nokia.prototype.call = function (contact_number) {
        console.log("calling number " + contact_number + " ..........");
    };
    Nokia.prototype.text = function (contact_number, message) {
        console.log("texting " + contact_number + " ...........");
        console.log(message);
    };
    Nokia.prototype.getDetails = function () {
        console.log("I am Nokia mobile");
    };
    return Nokia;
}());
exports.Nokia = Nokia;
