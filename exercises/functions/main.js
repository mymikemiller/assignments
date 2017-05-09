function getSum(a, b) {
    return a + b;
}

console.log(getSum(1, 2));

var getLargest = function (a, b, c) {
    return Math.max(a, Math.max(b, c));
}

console.log(getLargest(1, 5, 3));

function evenOrOdd(num) {
    return num % 2 == 0 ? "even" : "odd";
}

console.log(evenOrOdd(3));

var stringStuff = function (str) {
    if (str.length <= 20) {
        return str + str;
    } else {
        return str.slice(0, str.length / 2);
    }
}

console.log(stringStuff("hello"));
console.log(stringStuff("hello there, i'm a long string"));

function runFibonacci(n) {
    var output = "";
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        var currentFibNum = fibonacci(i);
        output += currentFibNum + " ";
        sum += currentFibNum;
    }
    console.log(output + "= " + sum);
}

function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(runFibonacci(5));

var quadratic = function (a, b, c) {
    return (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
}

console.log(quadratic(4, 5, 9));

function findMostFrequent(str) {
    var letter = "";
    var mostFrequent = 0;
    for (var i = 0; i < str.length; i++) {
        var letterCount = countLetter(str, str[i]);
        if (letterCount > mostFrequent) {
            mostFrequent = letterCount;
            letter = str[i];
        }
    }
    return letter;
}

function countLetter(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(findMostFrequent("aaabbcccddddeeff"));
