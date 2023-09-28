// Testing Objects for Properties

// .hasOwnProperty() method.

function checkForProperty(object, property) {
    console.log(object.hasOwnProperty(property))
}

//checkForProperty({
    //"top": "hat",
    //"bottom": "pans"
//}, "top") // true

//checkForProperty({ top: "hat", bottom: "pants"} , "middle") // false

// Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.

function checkObj(obj, checkProp) {
    let val = obj.hasOwnProperty(checkProp)
    if (val) {
        return (obj[checkProp])
    } else {
        return "Not Found"
    }
} 

checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift")