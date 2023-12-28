// match all non-numbers
// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
result = movieName.match(noNumRegex).length;
console.log(result) // 17 with colon and spaces + letters