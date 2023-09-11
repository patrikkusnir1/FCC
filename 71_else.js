// Introducing Else Statements


function test(num) {
 if (num > 10) {
  return "Bigger than 10"
 } else {
  return "10 or Less" // this execute if condition is false
 }
}
// Combine the if statements into a single if/else statement.
function testElse(val) {
 let result = "";

 if (val > 5) {
  result = "Bigger than 5"
 } else {
  result = "5 or Smaller"
 }

 return result;
}
testElse(4)


