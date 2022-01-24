// simple for loop
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log(i_1);
}
// simple while loop
var i = 10;
while (true) {
    i = i - 1;
    if (i < 5)
        break;
    console.log(i);
}
// create an array and initialize staticly
var reviews = [10, 9, 8, 9, 4, 3, 7, 6];
var sum = 0;
for (var i_2 = 0; i_2 < reviews.length; i_2++) {
    sum += reviews[i_2];
}
console.log("sum is " + sum);
//simplified for loop
sum = 0;
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var review = reviews_1[_i];
    sum += review;
}
console.log("averge review : " + (sum) / reviews.length);
