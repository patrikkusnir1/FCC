// reuse patterns using capture groups

let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
console.log(repeatRegex.test(repeatStr));
console.log(repeatStr.match(repeatRegex)); // array with matched substring and subgroup

// Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
console.log(reRegex.test(repeatNum))