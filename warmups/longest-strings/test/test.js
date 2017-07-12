let chai = require("chai");
let assert = chai.assert;

let longestStrings = require("../index.js");
//console.log(longestStrings());

describe("The function", () => {
  it("should return an array of the 3 adjacent elements with the longest combined length", () => {
    assert.deepEqual(longestStrings(["this", "a", "is", "an", "array"]), ["is", "an", "array"]);
  });
  it("should return an array of empty strings if all given elements are empty strings", () => {
    assert.deepEqual(longestStrings(["", "", "", ""]), ["", "", ""]);
  });
  it("should return an array with the last 3 elements if all elements are the same length", () => {
    assert.deepEqual(longestStrings(["test", "door", "darn", "crap"]), ["door", "darn", "crap"]);
  });
  it("should throw an error if there are not at least 3 elements provided", () => {
    assert.throws(() => { longestStrings(['test', 'me']) }, "input is too short");
  });
});