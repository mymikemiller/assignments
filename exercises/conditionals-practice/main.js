/// Lower Number ///
function getLowerNumber(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

console.log("The lower number is " + getLowerNumber(3, 4));

/// Monkey Trouble ///
function monkeyTrouble(monkeyOne, monkeyTwo) {
    return monkeyOne == monkeyTwo;
}

function testMonkeyTrouble(monkeyOne, monkeyTwo) {
    if (monkeyTrouble(monkeyOne, monkeyTwo)) {
        console.log("We are in trouble.");
    } else {
        console.log("We are safe.");
    }
}

// We should be in trouble
testMonkeyTrouble(true, true);
testMonkeyTrouble(false, false);

// We should be safe
testMonkeyTrouble(true, false);
testMonkeyTrouble(false, true);

/// Time ///
var date = new Date();
if (date.getHours() < 12) {
    console.log("Good Morning!");
} else if (date.getHours() < 18) {
    console.log("Good Afternoon!");
} else {
    console.log("Good Night!");
}
