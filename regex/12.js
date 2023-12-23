// Match Characters that Occur One or More Times

// let quoteSample = "aabc";
// let quoteSample2 = "abab";
// let quoteSample3 = "bcd";
// let myRegex = /a+/g // character a one or more time
// let result = quoteSample.match(myRegex);
// let result2 = quoteSample2.match(myRegex);
// let result3 = quoteSample3.match(myRegex);
// console.log(result) // [ 'aa' ]
// console.log(result2) // [ 'a', 'a' ]
// console.log(result3) // null

// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex)
console.log(result)