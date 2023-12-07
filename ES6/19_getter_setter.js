// Use getters and setters to Control Access to an Object

class Book {
    constructor(author) {
        this._author = author
    }
    // getter
    get writer() {
        return this._author //_private variable
    }

    // setter

    set writer(updatedAuthor) {
        this._author = updatedAuthor
    }
}

const novel = new Book("anonymous");
console.log(novel.writer)

novel.writer = "newAuthor";
console.log(novel.writer)


/* Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a setter that accepts a temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user. */

class Thermostat {
    constructor(temperature) {
        this._temperature = temperature
    }

    get temperature() {
        return 5/9 * (this._temperature - 32);
    }

    set temperature(updatedTemperature) {
        return this._temperature = (updatedTemperature * 9.0) / 5 + 32
    }
}

const thermos = new Thermostat(76)

let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp)
