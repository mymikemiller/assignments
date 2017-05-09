var str = 'bookkeeper larry';
var str = 'Harry Potter';
var noDups = "";
var misfits = "";

// Add a space so our comparisons work even at the end
str += " ";

for (var i = 1; i < str.length; i++) {
    if (str[i] == str[i - 1]) {
        misfits += str[i - 1];
    } else {
        noDups += str[i - 1];
    }
}

console.log("String: " + str);
console.log("No Duplicates: " + noDups);
console.log("Misfits: " + misfits);
