let chai = require("chai");
let assert = chai.assert;

let within10 = require("../index.js");
console.log(within10(10));

describe("The function", () => {
  it("Should return true if the specified number is within 10 of 100 or 200", () => {
    assert.equal(within10(105), true);
    assert.equal(within10(198), true);
    assert.equal(within10(90), true);
  });
  it("Should return false if the specified number is not within 10 of 100 or 200", () => {
    assert.equal(within10(111), false);
    assert.equal(within10(250), false);
    assert.equal(within10(85), false);
  });
});
