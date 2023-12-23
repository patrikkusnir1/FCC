// extract matches - .match() method
//let result = "Hello, World".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/
let result = extractStr.match(codingRegex);
console.log(result)
