// Handle a Rejected Promise with catch

// myPromise.catch(error => {

// })

// Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.

const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;
    if (responseFromServer) {
        resolve("We got the data")
    } else {
        reject("Data not received")
    }
});

makeServerRequest
.catch(error => {
    console.log(error)
})