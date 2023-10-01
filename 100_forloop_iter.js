// Iterate Through an Array with a For Loop

const arr = [10, 9, 8, 7, 6]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]) // takes all numbers from arr
}

// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

let total = 0;
const myArr = [2, 3, 4, 5, 6];

for (let i = 0; i < myArr.length; i++) {
    total+= myArr[i]
}

console.log(total)