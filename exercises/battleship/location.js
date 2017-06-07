var Location = function () {
    var isShip = Math.random() < 0.2 ? true : false;

    this.isShip = isShip;
    this.guessed = false;
    this.getDisplay = function () {
        if (this.guessed) {
            if (this.isShip) {
                return "X";
            } else {
                return "m";
            }
        } else {
            return "~";
        }
    }
}

module.exports = Location;
