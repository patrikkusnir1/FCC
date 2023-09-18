// Adding a Default Option in Switch Statements

switch (num) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    default:
        defaultStatement;
        break;
}

/* Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff */ 

function switchOfStuff(val) {
    let answer = ""; 
    switch(val) {
        case "a": 
            answer = "apple";
            break;
        case "b": 
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff"
            break;
    }
    return answer
}

