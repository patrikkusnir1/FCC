function findGreaterOrEqual(a, b) {
    if (a === b) {
        return "a and b are equal"
    }
    else if (a > b) {
        return "a is greater"
    }
    else {
        return "b is greater"
    }
}

// can be rewritten as 

function findGreaterOrEqual2(a, b) {
    (a === b) ? "a and b are equal"
    : (a > b) ? "a is greater" // add ? after expression
    : "b is greater"
}

// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.

function checkSign(num) {
    return  (num > 0) ? "positive"
    :       (num === 0) ? "zero"
    :                      "negative"}

checkSign(10)