// Use the parseInt Function with a Radix

// parseInt(string, radix)

const a = parseInt("11", 2) // 11 is in binary system
console.log(a)


// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
function convertToInteger(str) {
    return parseInt(str, 2)
}

console.log(convertToInteger("10011"));