let text = "abczzzzzzzzzzzzzzzzzzzzzabc";
let myRegex = /z+/; // returns one or more z letters
let result = text.match(myRegex)
console.log(result)

// Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

let reCriminals = /C+/g