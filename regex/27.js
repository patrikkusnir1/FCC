//Specify Exact Number of Matches
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
console.log(multipleHA.test(A4));
console.log(multipleHA.test(A3));
console.log(multipleHA.test(A100));

// Change the regex timRegex to match the word Timber only when it has four letter m's.

let timStr = "Timmmmber"
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);
console.log(result)