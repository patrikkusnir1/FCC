// Updating Object Properties

const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
}

ourDog.name = "Happy Camper"; // updating the object name
// or ourDog["name"] = "Happy Camper"
console.log(ourDog.name);


/* Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
 */

const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";
console.log(myDog.name);