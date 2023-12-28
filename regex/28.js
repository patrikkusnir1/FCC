// Check for All or None

let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
console.log(rainbowRegex.test(british)); // both variations will be true

// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

let favWord = "favourite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);
