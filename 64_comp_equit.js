// Comparison with the Strict Inequality Operator
// strick inequality !==

// Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

function testStrictNotEqual(val) {
 if (val !== 17) {
  return "Not Equal"
 }
 return "Equal"
}