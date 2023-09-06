// Access Multi-Dimensional Arrays With Indexes

const arr = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9],
 [[10, 11, 12], 13, 14]
];

const subarray = arr[3]; // [[10, 11, 12], 13, 14]
const nestedSubarray = arr[3][0]; // [10, 11, 12]
const element = arr[3][0][1]; // 11

const myArray = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9],
 [[10, 11, 12], 13, 14]
];


//Using bracket notation select an element from myArray such that myData is equal to 8.
const myData = myArray[2][1];