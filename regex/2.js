// Match Literal Strings

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
let wrongRegex = /kevin/
console.log(wrongRegex.test(testStr));
let waldoIsHiding = "Somewhere Waldo is hiding in this text."
let waldoRegex = /Waldo/
let result = waldoRegex.test(waldoIsHiding)
console.log(result)
