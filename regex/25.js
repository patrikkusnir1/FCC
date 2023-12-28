// Specify Upper and Lower Number of Matches
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/
console.log(multipleA.test(A4)) // true
console.log(multipleA.test(A2)) // false

// Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/
let result = ohRegex.test(ohStr);
console.log(result)