// Delete Properties from a JavaScript Object
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1, 
    "friends": ["everything"],
    "bark": "bow-wow"
}
delete ourDog.bark; // delete bark property

// Delete the tails property from myDog. You may use either dot or bracket notation.

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Coders"]
};

delete myDog.tails;
console.log(myDog)

