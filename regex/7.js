// matching anything with dot 

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./
console.log(huRegex.test(hugStr))

// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
console.log(result)