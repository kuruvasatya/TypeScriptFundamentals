var greetings = "good morning";
var greetings = "good evening"; //redeclarable
greetings = "bye"; //updatabale
var abc = "abc";
var abc = 'def'; // cant redeclare
abc = 'def'; // can update
var time = 10;
function greet() {
    if (time < 20) {
        var treet = "URU brewery";
        var count = 15;
    }
    console.log(treet); // treet has function scope, so it is available
    console.log(count); // count is block scope so it is not available
}
// var -> global/ nearest function scope, updatable, redeclarable
// let -> block {} scope
// const -> block scope
