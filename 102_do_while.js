const ourArray = [];
let i = 0;

do {
    ourArray.push(i);
    i++;
} while (i < 5); // [ 0, 1, 2, 3, 4 ]


const ourArray2 = [];
let j = 5;

while (j < 5) { // as this is not true
    ourArray2.push(j);
    j++
}
 // output will be []

const ourArray3 = [];
let k = 5;

do {
    ourArray3.push(k);
    k++;
} while (k < 5);

console.log(ourArray3) // output will be [5]

// Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

const myArray = [];
let l = 10;

do {
    myArray.push(l)
    l++
} while (l < 10)

console.log(myArray, l)

