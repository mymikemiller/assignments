let Chai = require("chai");
let assert = Chai.assert;
let wtf = require("../index.js");

describe("A recursive wtf function", () => {
  it("should return 'wtf' repeated the number of times as the parameter", () => {
    assert.equal(wtf(2), "wtfwtf");
  })

  it("should throw an error if the parameter is negative", () => {
    assert.throws(() => { wtf(-3); }, Error);
  })

  it("should return an empty string if the parameter is 0", () => {
    assert.equal(wtf(0), "");
  })
});