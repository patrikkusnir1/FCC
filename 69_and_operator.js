// Comparisons with the Logical And Operator

// && AND OPERATOR - if inside if - the same

function test(num) {
 if (num > 5) {
  if (num < 10) {
   return "Yes"
  }
 }
 return "No"
}

test(10) // return No ... must be more than 5 AND LESS than 10

// the same code 

function test2(num) {
 if ((num > 5) && (num < 10)) {
  return "Yes"
 }
 return "No"
}

/* 
Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

*/

function testLogicalAnd(val) {
 if (val <= 50 && val >= 25) {
  return "Yes"
 }
 return "No"
}

testLogicalAnd(10) // returns No

