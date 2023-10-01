function multiply(arr,n) {
    let product = 1;
    for (let i = 0; i < n; i++ ) {
        product *= arr[i]
    }
    console.log(product)
}

//multiply([3, 4, 6], 1) // multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

// same as 

function multiply2(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return (multiply2(arr, n - 1) * arr[n-1])
    }
}

//Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum (arr,n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1]
    }
}

console.log(sum([2,3,4],3))