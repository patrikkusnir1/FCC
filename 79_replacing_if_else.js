if (val === 1) {
    answer = "a"
} else if (val === 2) {
    answer === "b" 
} else {
    answer === "c"
}

// is the same as

switch(val) {
    case 1:
        answer = "a"
        break;
    case 2:
        answer = "b"
        break;
    default:
        answer = "c"
        break;

}

// Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
    let answer = "";
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 1:
            answer = "There is no #1"
            break;
        case 42:
            answer = "The Answer";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine"
            break;
    }

    return answer
}

chainToSwitch(1)