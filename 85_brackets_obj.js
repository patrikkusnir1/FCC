const myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};

//console.log(myObj["Space Name"]); - Kirk
//console.log(myObj["More Space"]); - Spock
console.log(myObj["NoSpace"]) // USS Enterprise

/* Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

 */
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
}

const entreeValue = testObj["an entree"]
const drinkValue = testObj["the drink"]

console.log(entreeValue, drinkValue)