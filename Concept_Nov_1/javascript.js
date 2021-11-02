// What is JAVASCRIPT?
// It is a scripting language, high level language, Interpreted language
// It is used to make your web pages interact
// Data manipulation
// JAvascript can run in browser
// Uses of Javascript: Netflix, Google
// Web applications
// Mobile applications: React Native (Javascript framework)
// Server side applications:

// CLIENT AND SERVER

// CLIENT --> GENERATES A REQUEST
// SERVER --> ACCEPTS THAT REQUEST --> MANIPULATES IT --> SENDS BACK A RESPONSE

// CLIENT --> MUKUL'S WEBPAGE (IT HAS ALL THE SURVEY DATA)
// SERVER APPLICATION --> ACCEPT THE REQUEST --> SEND IT TO HIS MAIL --> MAIL HAS BEEN SENT

// JS helps in building dynamic behaviour.
// there are two kinds of values: Fixed and variable
// Literals and variables
// Those items whose value does not change
// pi = 3.14
// Those items whose value changes
// Area of the cicle = Pi*r^2  --> radius and area of the circle

//-----------------------------------------------------------------//

// variables in JS

// Declaration and assignment
// Variables --> box (store values)
// Declaring
// Assignment 
// x = 3;
// x and y
// x = y (assigning the value of 'y' to 'x')

/** *
 * Three ways to declare a variable in JS
 * 'let', 'var', and 'const'
 * let x = 3;
 * const is basically constant
 * once a value is assigned to a constant, it cannot be changed
 * 
*/

/** *
 * Block Scoped
 * {
 * let x = 2
 * 
 * {
 *  let x = 3
 *  print x (3)
 * }
 * 
 * print x (2)
 * 
 * }
 * 
*/

/** *
 * NOT Block Scoped
 * var x = 2
 * 
 * {
 *  var x = 3
 *  print x 
 * }
 * print x 
 * 
*/

/**
 * let x;
 * this x can be a Number, String, Boolean
 * 
 * 
 * Var are hoisted: They can be called before declaring 
 * Let cannot be.
 * 
 * Data types:
 * Number
 * String
 * Boolean
 * Object
 * 
 * object = {
 * key: value
 * // Key will always string
 * // Value can be any datatype
 * 
 * }
 * 
 * const arr = [10,20,30,40]
 * arr[0] = 100
 * 
 */

// Functions
/**
 * block of code, which performs a task.
 * syntax 
 * passing a parameter to the function
 * you are passing it as an argument and receiving it as a param
 * function nameOfYourFunction(param1, param2) {
 *  // param1 = param1 + 10
 *  // Write your block of code
 * {
 * return param1
 * }
 * return
 * 
 * }
 */




// function sum(num1, num2) {
//     let sum = num1 + num2
//     return sum
// }

let resultFromSum = sum(2,3);
alert(resultFromSum);

