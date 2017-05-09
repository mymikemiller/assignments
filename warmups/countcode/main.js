// from http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

// Returns the number of times "code" appears in a given string, with the 'd' allowed to be any letter
function countCode(string) {
    var count = 0;
    for (var i = 0; i < string.length - 3; i++) {
        // Get the current substring
        substr = string.substring(i, i + 4);

        // Replace the third character with a 'd'
        substr = substr.replaceAt(2, 'd');

        if (substr === 'code') {
            count++;
        }
    }
    return count;
}

console.log(countCode("aaacodebbb"));
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcope"));
