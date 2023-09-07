// Understanding Undefined Value returned from a Function

//et sum = 0;

function addSum(num) {
 sum = sum + num; // function without return statement
}

addSum(3); // returns undefined, nothing to return
console.log(sum) // it changes global variable to 3 though!!

// Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
let sum = 0;
function addThree() {
 sum = sum + 3
}

function addFive() {
 sum = sum + 5;
}

addThree();
addFive();