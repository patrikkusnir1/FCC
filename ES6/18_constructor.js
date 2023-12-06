// Use class Syntax to Define a Constructor Function

// Explicit constructor

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet
    }
    takeOff() {
        console.log("To " + this.targetPlanet + "!")
    }
}

// Implicit constructor 

class Rocket {
    launch() {
        console.log("To the moon!")
    }
}

const zeus = new SpaceShuttle("Jupiter")
zeus.takeOff();

const atlas = new Rocket()
atlas.launch()


/* Use the class keyword and write a constructor to create the Vegetable class.

The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor. */

class Vegetable {
    constructor(vegetable) {
        this.name = vegetable
    }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name)
