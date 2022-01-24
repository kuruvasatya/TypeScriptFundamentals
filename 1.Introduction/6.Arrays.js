var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// mapping 
var xsquare = x.map(function (x) { return x * x; });
console.log("square: => " + xsquare);
// adding elements to the array
x.push(11);
console.log("adding: => " + x);
// removing elements from the end
x.pop();
console.log("removing: => " + x);
// reduce
var y = x.reduce(function (x, y) { return x + y; });
console.log("reduce: => " + y);
// reverse
var z = x.reverse();
console.log("reversing the array: => " + __spreadArray([], z, true));
// slice 
console.log("slice: => " + x.slice(1, 5));
console.log(x.indexOf(5));
