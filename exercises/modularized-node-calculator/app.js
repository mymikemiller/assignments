var readlineSync = require("readline-sync");

var addCalc = require("./addition");
var subtractCalc = require("./subtraction");
var multiplyCalc = require("./multiplication");
var divideCalc = require("./division");
var exponentCalc = require("./exponent");

var input = readlineSync.question("Please input two numbers and an operation, space-seperated (e.g. 1 2 add): ");

var inputParsed = input.split(" ");

var a = parseInt(inputParsed[0]);
var b = parseInt(inputParsed[1]);
var operation = inputParsed[2].toLowerCase();

console.log(a + " " + operation + " " + b + " = ")

switch (operation) {
    case "add":
        console.log(addCalc(a, b));
        break;
    case "subtract":
        console.log(subtractCalc.subtract(a, b));
        break;
    case "multiply":
        console.log(multiplyCalc.multiply(a, b));
        break;
    case "divide":
        console.log(new divideCalc(a, b).result);
        break;
    case "exponentiate":
        console.log(exponentCalc.exponentiate(a, b));
        break;

}

//console.log(addCalc(3, 4));
//console.log(subtractCalc.subtract(5, 6));
//console.log(multiplyCalc.multiply(7, 8));
//console.log(new divideCalc(9, 10).result);
//console.log(exponentCalc.exponentiate(11, 12));
