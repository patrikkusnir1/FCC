// Check For Mixed Grouping of Characters - use parentheses

// find Penguin or Pumpkin - /P(engu|umpk)in/g and test method

let testStr = "Pumpkin";
let testRegex = /P(engu)|(umpk)in/;
console.log(testRegex.test(testStr)) // pumpkin and penguin will return true

// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

//Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

let myString = "Franklin Rosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
console.log(result)



