// find more than first match
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
//console.log(testStr.match(ourRegex)); // gives only first match 

let repeatRegex = /Repeat/g;
console.log(testStr.match(repeatRegex))

// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi
let result = twinkleStar.match(starRegex);
console.log(result)



