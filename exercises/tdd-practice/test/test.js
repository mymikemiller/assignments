var chai = require("chai");
var assert = chai.assert;

var practice = require("../app");

describe("lastdigit", function () {
    {
        it("should return true if the last two digits are equal", function () {
            assert.equal(practice.compare(15, 5), true);
            assert.equal(practice.compare(168, 18), true);
        });

        it("should return false if the last two digits are not equal", function () {
            assert.equal(practice.compare(16, 5), false);
            assert.equal(practice.compare(168, 59), false);
        });
    }
});

describe("withoutEnd", function () {
    {
        it("should return the argument without the first and last letter", function () {
            assert.equal(practice.withoutEnd("hello"), "ell");
        });
    }
});