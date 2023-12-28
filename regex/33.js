// Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /\s+(Hello,\sWorld!\s+)/
let result = hello.replace(wsRegex, "Hello, World!")
console.log(result)