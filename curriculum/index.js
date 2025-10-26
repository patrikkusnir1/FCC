const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  // console.log(num)
  num = num + 1;
}

// const str = "freeCodeCamp";
// for (let char of str) {
//   console.log(char)
// }

const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 40 }
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} old.`)
}