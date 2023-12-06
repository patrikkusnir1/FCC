// Write Concise Declarative Functions with ES6

const person = {
    name: "Taylor",
    sayHello: function() {
        return `Hello! my name is ${this.name}`
    }
};

// ES6 

const person2 = {
    name: "Patrik",
    sayHello() {
        return `Hello! my name is ${this.name}`
    }
}
console.log(person2.sayHello())

// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear
    }
}
bicycle.setGear(3);
console.log(bicycle.gear)