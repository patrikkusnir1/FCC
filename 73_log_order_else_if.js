// Logical Order in If Else Statements

function foo(x) {
 if (x < 1) {
  return "Less than one"
 } else if (x < 2) {
  return "Less than two"
 } else {
  return "Greater than or equal to two"
 }
}

foo(0) // first will be executed, others no

function bar(x) {
 if (x < 2) {
  return "Less than two"
 } else if (x < 1) {
  return "Less than one"
 } else {
  return "Greater than or equal to two"
 }
}

bar(0) // Less than two - first again

// Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {
 if (val < 5) {
  return "Less than 5"
 } else if (val < 10) {
  return "Less than 10"
 } else {
  return "Greater than or equal to 10"
 }
}

orderMyLogic(7)