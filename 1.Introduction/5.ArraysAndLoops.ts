// simple for loop
for(let i=0; i <10; i++) {
    console.log(i);
}

// simple while loop
let i = 10;
while(true){
    i = i - 1
    if( i < 5)
        break;
    console.log(i);
}

// create an array and initialize staticly
let reviews: number[] = [10, 9, 8, 9, 4, 3, 7, 6]
let sum = 0
for( let i = 0; i< reviews.length; i++)
{
     sum += reviews[i]
}
console.log("sum is " + sum);

//simplified for loop
sum = 0;
for( let review of reviews) {
    sum += review
}
console.log( "averge review : " + (sum)/reviews.length);

