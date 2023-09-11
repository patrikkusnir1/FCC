// Comparisons with the Logical Or Operator

function test(num) {
 if (num > 10) {
  return "No"
 }
 if (num < 5) {
  return "No"
 }
 return "Yes"
}

test(5)

// same code

function test2(num) {
 if (num > 10 || num < 5) {
  return "No";
 }
 return "Yes";
}

// Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

function testLogicalOr(val) {
 if (val > 20 || val < 10) {
  return "Outside"
 }
 return "Inside"
}

testLogicalOr(15)