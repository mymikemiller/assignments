let chai = require("chai");
let assert = chai.assert;

let matchingWords = require("../index.js");

describe("A program to find repeated words in a string", function() {
  it("should return the repeated words", function() {
    assert.deepEqual(matchingWords("hello hello there"), ["hello"]);
    assert.deepEqual(matchingWords("allen allen jacob jacob"), ["allen", "jacob"]);
    assert.deepEqual(matchingWords("hello hiya hello there hiya"), ["hello", "hiya"]);
  })
  it("should return an empty array when no words are repeated", function() {
    assert.equal(matchingWords("hello I don't know why you say goodbye").length, 0);
    assert.deepEqual(matchingWords("hello I don't know why you say goodbye"), []);
  });
});
