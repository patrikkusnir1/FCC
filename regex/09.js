// Match Letters of the Alphabet
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRex = /[a-e]at/;
console.log(catStr.match(bgRex));
console.log(batStr.match(bgRex));
console.log(matStr.match(bgRex)); // null

// Match all the letters in the string quoteSample.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi
let result = quoteSample.match(alphabetRegex)
console.log(result)