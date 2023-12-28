// Find Characters with Lazy Matching
let sample = "titanic";
let greedyRegex = /t[a-z]*i/; // starts with t,some characters and ends with i
let lazyRegex = /t[a-z]*?i/; // starts with t,some characters and ends with i
console.log(sample.match(greedyRegex)) // titani
console.log(sample.match(lazyRegex)) // ti

// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // returns tag <h1>
let result = text.match(myRegex)
console.log(result)

