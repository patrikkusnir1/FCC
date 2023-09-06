// Manipulate Arrays With unshift Method

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // removes first item
ourArray;
ourArray.unshift("Happy") // add item from beginning
ourArray; // ['Happy', 'J', 'cat']

const myArray = [["John", 23], ["dog", 3]];
// Add ["Paul", 35] to the beginning of the myArray variable using unshift().

myArray.unshift(["Paul", 35])
myArray;