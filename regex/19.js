// Match Everything But Letters and Numbers

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
console.log(numbers.match(shortHand)); // returns %
console.log(sentence.match(shortHand)); // returns !

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result)