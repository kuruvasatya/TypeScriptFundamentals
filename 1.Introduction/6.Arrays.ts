let x : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// mapping 
let xsquare: number[] = x.map((x)=> x*x)
console.log("square: => " + xsquare)

// adding elements to the array
x.push(11);
console.log("adding: => "+ x);

// removing elements from the end
x.pop();
console.log("removing: => " + x);

// reduce
let y: number = x.reduce((x,y) => x+y);
console.log("reduce: => "+ y)

// reverse
let z: number[] = x.reverse()
console.log("reversing the array: => "+ [...z])

// slice 
console.log("slice: => " + x.slice(1,5));

console.log(x.indexOf(5));

