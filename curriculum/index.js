const song = "Bohemian rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${ 
  (score / highestScore) * 100
}%.`;
console.log(output)