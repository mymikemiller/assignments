String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.replaceAll("?", "");
    str = str.replaceAll("!", "");
    str = str.replaceAll(".", "");
    str = str.replaceAll(",", "");
    str = str.replaceAll(" ", "");

    console.log(str);

    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }

    return true;

}

console.log(isPalindrome("starrats")); // true  
console.log(isPalindrome("palindrome")); // false  
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!")); // true
