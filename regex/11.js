//  Match Single Characters Not Specified
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[^aeiou]/gi // all characters without vowels
// let result = quoteSample.match(myRegex);
// console.log(result)

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice."
let myRegex = /[^aeiou1-9]/gi
let result = quoteSample.match(myRegex);
console.log(result)