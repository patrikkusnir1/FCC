const user = {
  name: "John",
  age: 30,
  isAdmin: true
}

// const jsonString = JSON.stringify(user);

const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA"
}

const jsonString = '{"name": "Alice", "age": 25, "isAdmin": true}'
const userObj = JSON.parse(jsonString).age;

console.log(userObj)