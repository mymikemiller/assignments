// Given an int n, return True if it is within 10 of 100 or 200.
let within10 = (n) => {
  return Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10;
}

module.exports = within10;
