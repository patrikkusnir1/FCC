// Match Beginning String Patterns

let firstString = "Ricky is first and can be found";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString)); // true
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst)); // false

// Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing."
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
console.log(result)