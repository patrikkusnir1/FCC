// Match Single Character with Multiple Possibilities

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/
console.log(bigStr.match(bgRegex))
console.log(bagStr.match(bgRegex))
console.log(bugStr.match(bgRegex))
console.log(bogStr.match(bgRegex)) // doesn't show - null

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it."
let vowelRegex = /[aeiou]/gi
console.log(quoteSample.match(vowelRegex))
