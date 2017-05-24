function makeItRain(num) {
    var numStr = num.toString();
    var result = numStr;

    // Add commas every 3, in reverse order beginning 3 after the 2 decimal digits (5)
    for (var i = numStr.length - 5; i >= 0; i -= 3) {
        result = result.slice(0, i) + "," + result.slice(i, result.length);
    }

    // Add the decimal
    if (result.length == 1) {
        result = "0" + result;
    }
    if (result.length >= 2) {
        result = result.slice(0, result.length - 2) + "." + result.slice(result.length - 2, result.length);
    }

    var result = '$' + result;
    return result;
}

console.log(makeItRain(123456789)); // returns $1,234,567.89
console.log(makeItRain(89)); // returns $1,234,567.89

console.log(makeItRain(9)); // returns $.09
