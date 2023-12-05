// Accessing Nested Arrays

const ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];

console.log(ourPets[0].names[1]) // Fluffy
console.log(ourPets[1].names[0]) // Spot


// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list[1]
console.log(secondTree)
