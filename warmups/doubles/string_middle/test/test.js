let Chai = require("chai");
let assert = Chai.assert;
let stringMiddle = require("../index.js");

describe("A string-middle function", () => {
  it("should return the middle two characters of a given string", () => {
    assert.equal(stringMiddle("test"), "es");
  })

  it("should throw an error if the string is not of even length", () => {
    assert.throws(() => { stringMiddle("tests") }, Error);
  })

  it("should throw an error if the string is empty", () => {
    assert.throws(() => { stringMiddle("") }, Error);
  })
});