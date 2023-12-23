// Handle a Fulfilled Promise with then

myPromise.then(result => {

})

// Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.

const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
    if (responseFromServer) {
        makeServerRequest.then(result => {
            console.log(result)
        })
        resolve("We got the data");
    } else {
        reject("Data not received")
    }
})