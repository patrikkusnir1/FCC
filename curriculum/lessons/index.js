function createLargeArray() {
	let largeArray = new Array(1000000);
	return function() {
		console.log(largeArray.length)
	}
}

let printArraylength = createLargeArray();
printArraylength()