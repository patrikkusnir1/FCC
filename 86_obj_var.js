// Accessing Object Properties with Variables

const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
}

const myDog = "Hunter";
const myBreed = dogs[myDog]; // Doberman
console.log(myBreed)

// Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
}

const playerNumber = 16;
const player = testObj[playerNumber]
console.log(player) // will be Montana