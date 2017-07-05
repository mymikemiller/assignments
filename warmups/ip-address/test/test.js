var Chai = require("chai");
var assert = Chai.assert;

var isIPAddress = require("../app.js");

describe("An IP Address tester", function () {
  it("should true if the number is a valid IP Address.", function () {
    assert.equal(isIPAddress("172.16.254.1"), true);
    assert.equal(isIPAddress("197.168.0.1"), true);
  });
  it("should throw an error if the number is not a valid IP Address.", function () {
    assert.throws(() => { isIPAddress("283.16.254.1") }, "Invalid number specified");
    assert.throws(() => { isIPAddress("283.16.254.b") }, "Invalid number specified");
    assert.throws(() => { isIPAddress("255.16.254") }, "Must specify 4 numbers separated by periods");
  });
});