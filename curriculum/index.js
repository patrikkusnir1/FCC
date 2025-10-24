const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York"
};

const {job, city, ...remainingProperties} = person;
console.log(remainingProperties)

