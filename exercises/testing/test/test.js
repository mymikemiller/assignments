var chai = require("chai");
var assert = chai.assert;

//import code
var calc = require("../app.js");

describe("A calculator", function () {
    it("should return the sum of two numbers", function () {
        assert.equal(calc.add(2, 2), 4);
        assert.equal(calc.add(-1, -1), -2);
    });

    it("should return the difference between two numbers", function () {
        assert.equal(calc.sub(2, 2), 0);
        assert.equal(calc.sub(-2, 1), -3);
    })

    it("should return the dividend of two numbers", function () {
        assert.equal(calc.div(2, 2), 1);
        assert.equal(calc.div(-6, 2), -3);
    })

    it("should return the product of two numbers", function () {
        assert.equal(calc.mul(2, 2), 4);
        assert.equal(calc.mul(-6, 2), -12);
    })

    it("should return the dividend of two numbers", function () {
        assert.equal(calc.mod(2, 2), 0);
        assert.equal(calc.mod(-6, 4), -2);
    })
});