function isIPAddress(addr) {
  numbers = addr.split(".");
  if (numbers.length === 4) {
    for (var i = 0; i < numbers.length; i++) {
      let num = parseInt(numbers[i]);
      if (num < 0 || num >= 256) {
        throw "Invalid number specified";
      }
    }
    return true;
  }
  throw "Must specify 4 numbers separated by periods";
}

module.exports = isIPAddress;