var readlineSync = require('readline-sync');

function isCaps(letter) {
    return letter === letter.toUpperCase();
}

var input = readlineSync.question("Enter a string and I'll invert the caps for you: ")
input = input.split("");

var result = "";

input.forEach(function (letter) {
    if (isCaps(letter)) {
        result += letter.toLowerCase();
    } else {
        result += letter.toUpperCase();
    }
});

console.log(result);
