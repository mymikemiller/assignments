function Multiplier() {
    this.multiply = function (a, b) {
        return a * b;
    }
}

module.exports = new Multiplier;
