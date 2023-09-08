// Use Conditional Logic with If Statements

function test(myCondition) {
 if (myCondition) {
  return "It was true";
 }
 return "It was false";
}

test(true); // returns It was true
test(false); // returns It was false

// Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

function trueOrFalse(wasThatTrue) {
 if (wasThatTrue) {
  return "Yes, that was true"
 }
 return "No, that was false"
}