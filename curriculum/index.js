/* 
You should log "Hello! I'm your coding fun fact guide!" to the console as a greeting message to the user.
You should create three variables: botName, botLocation, and favoriteLanguage, that store the bot's name, where it's from, and its favorite coding language, respectively.
You should log "My name is (botName) and I live on (botLocation)." to the console.
You should log "My favorite programming language is (favoriteLanguage)." to the console.
You should use let to create a codingFact variable and assign it a string that is a fun fact about your bot's favorite coding language and include the use of the favoriteLanguage variable.
You should log the codingFact to the console.
You should reassign the codingFact variable to a new fact about the bot's favorite language using the favoriteLanguage variable again.
You should log the codingFact to the console again.
You should reassign the codingFact variable again to another new fact about the bot's favorite language using the favoriteLanguage variable.
You should log the codingFact to the console a third time.
You should log "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." to the console as a farewell statement from the bot.
*/

console.log("Hello! I'm your coding fun fact guide!");
const botName = "JS bot";
const botLocation = "JS Planet";
const favoriteLanguage = "Javascript";
console.log("My name is " + botName + " and I live on " + botLocation + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");
let codingFact = "I was created by Patrik," + favoriteLanguage + " specialist.";
console.log(codingFact);
codingFact =
  "I chose " +
  favoriteLanguage +
  " because I thought, it will be easy to learn.";
console.log(codingFact);
codingFact = favoriteLanguage + " is my passion!";
console.log(codingFact);
console.log(
  "It was fun sharing these facts with you. Goodbye! - " +
    botName +
    " from " +
    botLocation +
    "."
);