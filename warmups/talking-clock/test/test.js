let Chai = require("chai");
let assert = Chai.assert;

let talkingClock = require("../index.js");

describe("A talking clock", () => {
  it("should throw an error if the input is not two digits, a colon, then two digits", () => {
    assert.throws(() => talkingClock("20:test"), "invalid input");
  });
  it("should return null if the input is not less than 24 hours, or 60 minutes", () => {
    assert.throws(() => talkingClock("20:test"), "invalid input");
  });
  it("should return the time as words when given a time in digits", () => {
    assert.equal(talkingClock("20:15"), "it is eight fifteen pm");
  });
});