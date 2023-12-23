

// or you can achieve this like that 

const add2 = (x, y) => {
    return x + y
}

export { add2 }

const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase();
}

export {uppercaseString, lowercaseString} // we export these functions to another files