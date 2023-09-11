// Selecting from Many Options with Switch Statements

switch (fruit) {
 case "apple":
  console.log("The fruit is an apple");
  break;
 case "orange":
  console.log("The fruit is an orange");
  break;
}

/* 
Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
*/
function caseInSwitch(val) {
 let answer = "";

 switch (val) {
  case 1:
   answer = "alpha"
   break;
  case 2:
   answer = "beta";
   break;
  case 3:
   answer = "gamma";
   break;
  case 4:
   answer = "delta";
 }
 return answer
}

caseInSwitch(1)
