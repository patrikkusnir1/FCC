// Comparison with the Strict Equality Operator

function equalityTest(myVal) {
 if (myVal === 10) {
  return "Equal"
 }
 return "Not Equal"
}

equalityTest("10") // returns false because === strict operator


// Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
function testStrict(val) {
 if (val === 7) {
  return "Equal"
 }
 return "Not equal"
}

testStrict(10)