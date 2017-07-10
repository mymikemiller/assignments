let chai = require("chai");
let assert = chai.assert;

let parenthesis = require("../index.js");

describe("Balancing parenthesis", () => {
  it("Should return false if there are not enough opening parentheses", () => {
    assert.equal(parenthesis("((hi)"), false);
  });
  it("Should return true if each opening paren has a closing paren", () => {
    assert.equal(parenthesis("(())"), true);
  });
  it("Should return false if there are not the same number of opening as closing parenthesis", () => {
    assert.equal(parenthesis(")hi)"), false);
  });
});
