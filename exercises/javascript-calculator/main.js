var readlineSync = require('readline-sync');

function add(operand1, operand2) {
    return operand1 + operand2;
}

function sub(operand1, operand2) {
    return operand1 - operand2;
}

function mul(operand1, operand2) {
    return operand1 * operand2;
}

function div(operand1, operand2) {
    return operand1 / operand2;
}

var operand1 = readlineSync.question("Enter the first operand: ") * 1;
var operand2 = readlineSync.question("Enter the second operand: ") * 1;

while (true) {
    var func = readlineSync.question("Enter the function [add, mul, sub, div]: ");

    var result = 0;
    switch (func) {
        case 'add':
            result = add(operand1, operand2);
            break;
        case 'sub':
            result = sub(operand1, operand2);
            break;
        case 'mul':
            result = mul(operand1, operand2);
            break;
        case 'div':
            result = div(operand1, operand2);
            break;
        default:
            console.log("I didn't understand the operation you tried to perform.");
            continue;
    }
    console.log("The result is: " + result);
}
