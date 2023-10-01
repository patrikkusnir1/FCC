//Generate Random Whole Numbers with JavaScript

// Math.random()
// multiply by 20
// use Math.floor()

console.log(Math.floor(Math.random() * 20))

// Use this technique to generate and return a random whole number in the range from 0 to 9.

function randomWholeNum() {
    return Math.floor(Math.random()*10) // add 1 if you want from 0 to 9
}

console.log(randomWholeNum())