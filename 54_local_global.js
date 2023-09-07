//Global vs.Local Scope in Functions

const someVar = "Hat";

function myFun() {
 const someVar = "Head";
 return someVar; // return head
}

myFun();

// Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
const outerWear = "T-Shirt"


function myOutfit() {
 let outerWear = "sweater";
 return outerWear;
}

myOutfit();