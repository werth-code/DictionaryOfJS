// Hoisting
// At the start of your program all variable names and named functions are hoisted to top.
// This takes memory in the browser, so it may be better to consider using anonymous functions.


var a = "first"
var b = "second"
var c = "third"

sayHi();
console.log(a + " " + b + " " + c + " " + d)
a()

var d = "fourth";

//in this case d is hoisted and will come back as undefined.
// the same happens with named functions...

function sayHi() { //This function is hoisted to the top before our program runs.
    console.log("Hi!")
}

//NOTE: Anonymous functions are NOT hoisted...

let a = function() { // Since this is called before it is declared, and is not HOISTED, it throws an error.
    console.log("I am not hoisted!")
}