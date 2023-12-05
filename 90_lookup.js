// Using Objects for Lookups

const article = {
    "title": "How to create objects in Javascript",
    "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
    "author": "Kaashan Hussain",
    "language": "Javascript",
    "tags": "TECHNOLOGY",
    "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];

// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

function phoneticLookup(val) {
    let result = "";

    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    result = lookup[val]
    console.log(result)
}