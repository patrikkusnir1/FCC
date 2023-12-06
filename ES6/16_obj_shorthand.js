// Write Concise Object Literal Declarations Using Object Property Shorthand

const getMousePosition = (x, y) => ({
    x: x,
    y: y
})

//can be written as

const getMousePositionNew = (x, y) => ({x, y})

// Use object property shorthand with object literals to create and return an object with name, age and gender properties.

const createPerson = (name, age, gender) => {
    return {name, age, gender}
}

console.log(createPerson("Patrik", 30, "male"))