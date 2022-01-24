var Customer3 = /** @class */ (function () {
    function Customer3() {
    }
    Object.defineProperty(Customer3.prototype, "firstName", {
        get: function () {
            console.log("first Name getter is called");
            return this._firstName;
        },
        set: function (value) {
            console.log("first Name setter is called");
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer3.prototype, "lastName", {
        get: function () {
            console.log("last Name getter is called");
            return this._lastName;
        },
        set: function (value) {
            console.log("last Name setter is called");
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer3;
}());
var customer3 = new Customer3();
customer3.firstName = "satya";
console.log(customer3.firstName);
