var readlineSync = require('readline-sync');

// Wait for user's response. 
var name = readlineSync.question('May I have your name? ');
var age = readlineSync.question('How old are you? ');
var color = readlineSync.question('What is your favorite color? (be very very specific) ');

console.log('Hi ' + name.toUpperCase() + '!' + '\n');
console.log('There are ' + name.length + " characters in your name." + '\n');
console.log("A possible screen name for you is " + name + age + '\n');
if (color.length > 20) {
    console.log("The first half of your favorite color is " + color.slice(0, color.length / 2));
}
