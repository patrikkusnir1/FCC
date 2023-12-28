// Positive and Negative Lookahead

let quit = "qu";
let noquit = "qt"
let quRegex = /q(?=u)/ // positive lookahead
let qRegex = /q(?!u)/  // negative lookahead

console.log(quit.match(quRegex)) // return q, find u but not return
console.log(noquit.match(qRegex)) // return q, t doesn't return

/** A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number: */

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/; // 3-6 any char + optional char and number
console.log(checkPass.test(password))

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

let sampleWord = "astronaut12";
let pwRegex = /^(?=.*\d{2})(?=\w{6,}$)/
// .*\d{2}
//
let result = pwRegex.test(sampleWord);
console.log(result)