// Match All Letters and Numbers
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/ // the same
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers)); // true
console.log(shortHand.test(numbers));// true
console.log(longHand.test(varNames)) // true
console.log(shortHand.test(varNames)) // true


//Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
let quoteSample = "The five boxing wizards jump quickly."
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result)