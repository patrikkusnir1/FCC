// Match Non-Whitespace Characters
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g
console.log(whiteSpace.match(nonSpaceRegex).length); //32 letters and signs

// Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace).length;
console.log(result)