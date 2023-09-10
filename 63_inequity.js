// inequity !=, 1 != 2 // true

// Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

// Setup 

function testNotEqual(val) {
 if (val != 99) {
  return "Not Equal";
 }
 return "Equal";
}

testNotEqual(10)