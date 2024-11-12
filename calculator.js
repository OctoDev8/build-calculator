// I don't know, I just want to use it.
"use strict";

// Functions for the calculator
function addMath(x, y){
  return x + y
}

function subtractMath(x, y){
  return x - y
}

function multiplyMath(x, y){
  return x * y
}

function divideMath(x, y){
  if(y === 0){
    throw new Error ("Cannot divide by zero!")
  }
  return x / y
}

// Making them into objects
let add = {operation: addMath, symbol: "+"}
let minus = {operation: subtractMath, symbol: "-"}
let multiply = {operation: multiplyMath, symbol: "*"}
let divide = {operation: divideMath, symbol: "/"}

// Saving them all into an array
const operations = [add, minus, multiply, divide]

// Grab the command line arguments
const argv = process.argv.slice(2); // I don't want node and script js just the operators

// Checking if there's enough arguments
try {
  if(argv.length !== 3){
  throw new Error('I need (number) (operator) (number) please =w=')
}
// If there is enough then
console.log("Alrighty I will process...")

// Grabbing the arguments
const numberOne = parseFloat(argv[0])
const operation = argv[1]
const numberTwo = parseFloat(argv[2])

// Now let's just check that you didn't troll...
if(isNaN(numberOne) || isNaN(numberTwo)){
  throw new Error ('Please give me numbers :(')
}

// Alrighty time to perform the calculations after all of that!
// This guy does calculations based on the operation :O
let sum;

  switch (operation) {
    case '+':
      sum = operations[0].operation(numberOne, numberTwo);
      break;
    case '-':
      sum = operations[1].operation(numberOne, numberTwo);
      break;
    case '*':
      sum = operations[2].operation(numberOne, numberTwo);
      break;
    case '/':
      sum = operations[3].operation(numberOne, numberTwo);
      break;
    default:
      throw new Error("Sorry I don't use that operator, I only do basic arithmetic :(");
  }

console.log(`Result: ${sum}`)
}
// If there's any other errors I'll just catch it here
catch(error){
  console.error(`Error: ${error.message}`)
}
