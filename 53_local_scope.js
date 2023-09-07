function myTest() {
 const loc = "foo";
 console.log(loc)
}

myTest();
console.log(loc) // this won't work because loc is closed in the function

// Declare a local variable myVar inside myLocalScope and run the tests.

//Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

function myLocalScope() {
 let myVar = 5;
 console.log("inside my local scope", myVar) // it works
}
myLocalScope();
console.log("outside my local scope", myVar) // it doesn't work