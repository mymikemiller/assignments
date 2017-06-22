var assert = function (actual, expected) {
    if (expected != actual) {
        throw {
            actual: actual,
            expected: expected
        };
    }
    console.log("Success", {actual: actual, expected: expected});
};

var describe = function (message, testFunc) {
    console.log(message);
    try {
        testFunc()
    }
    catch (err) {
        console.log("Test group failed", err);
    }
};

var add = function (a, b) {
    return a + b;
}
var sub = function (a, b) {
    return a - b;
}
var multiply = function (a, b) {
    return a * b;
}
var divide = function (a, b) {
    return a / b;
}
var mod = function (a, b) {
    return a % b;
}

describe("Test calculator", function () {
    assert(add(1, 2), 3);
    assert(sub(2, 1), 1);
    assert(multiply(2, 1), 2);
    assert(divide(2, 1), 2);
    assert(mod(10, 6), 4);
})