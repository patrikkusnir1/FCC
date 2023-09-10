// Practice comparing different values

// The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

// Setup 

function compareEquality(a, b) {
 if (a === b) { // strict equality
  return "Equal"
 }
 return "Not equal"
}

compareEquality(10, "10") // will be not equal