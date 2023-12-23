// Use * to Import Everything from a File

import * as myMathModule from "./21_math_functions.mjs";

console.log(myMathModule.add2(2,3))

/* 
The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.
*/ 

import * as stringFunctions from "./string_functions.js"