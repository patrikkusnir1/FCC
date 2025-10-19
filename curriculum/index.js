
let globalVar = "I'm a global variable"; // ? global variable

function printGlobalVar() {
  console.log(globalVar) // * use inside the function
}

printGlobalVar()

function greet() {
  let message = "Hello, local scope!"; // ? local variable
  console.log(message);
}

greet();
//console.log(message) //! throws an error

if (true) {
  let blockVar = "I'm in a block";
  console.log(blockVar);
}
console.log(blockVar); //! throws an error