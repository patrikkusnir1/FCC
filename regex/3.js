// Match literal strings with different possibilities

let petString = "Emma has a pet rock.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
console.log(result)