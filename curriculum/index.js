function greet(name) {
  console.log("Hello, " + name + "!")
}

function doSomething() {
  console.log("Doing something")
}

let result = doSomething();
console.log(result);

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(3, 4));

const sum = function(num1, num2) {
  return num1 + num2;
}

console.log(sum(3, 4));

function greetings(name = "Guest") {
  console.log("Hello, " + name + "!")
}

greetings();
greetings("Anna")