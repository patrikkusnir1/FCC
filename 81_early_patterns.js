function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye") // it doesn't show
}
//myFun(); // will be Hello

// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}
console.log(abTest(2, 2))