/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain null values
  It is decided that if there is a null value the program should exit
  - Add a check for null values, and if one exists, exit the program
  - Do not edit any of the existing code
*/

var pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];

function checkForNull(element){
  // if(element === null){
  //   return true;
  // }
  // else {
  // return false;
  // }
   return element === null;
}
var hasNull = pairsByIndex.some(checkForNull); 
if(hasNull){
  process.exit(1);
}

// some functions always return true or false; Also they only need at least one of the condition to be met. 

// function checkForNull(element){
  // return element === null;
// }
// If there is a null value in the array exit the program with the error code
// https://nodejs.org/api/process.html#process_process_exit_code
// process.exit(1);

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

var pairs = pairsByIndex.map(function (indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
