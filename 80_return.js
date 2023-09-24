function isEqual(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

// better way that do this

function isEqual2(a, b) {
    return a === b;
}

//console.log(isEqual2(3,4))

// Fix the function isLess to remove the if/else statements.

function isLess(a, b) {
    return (a < b)
}

console.log(isLess(10, 15));