var cup = {
    full: true,
    tea: "chamomile",
    color: "white",
    drink: function () {
        this.full = false;
    }
}

console.log(cup.full);
cup.drink();
console.log(cup.full);

var laptop = {
    color: "grey",
    powerLevel: 50,
    heavy: false,
    charge: function () {
        powerLevel++;
    }
}

var monitor = {
    color: "black",
    on: false,
    mirroring: false,
    mirror: function () {
        mirroring = true;
    }
}

var projector = {
    on: true,
    showing: "there is no spoon",
    colors: ["red", "green", "blue"],
    togglePower: function () {
        on = !on;
    }
}

var plant = {
    inVase: true,
    color: "white",
    needsWater: true,
    water: function () {
        needsWater = false;
    }
}

var shelf = {
    color: "black",
    contents: [plant],
    isBlack: function () {
        return this.color === "black";
    },
    paint: function (color) {
        this.color = color;
    }
}

console.log(shelf.color);
shelf.paint("white");
console.log(shelf.color);

var chair = {
    color: "black",
    hasOccupant: false,
    legs: 4,
    sit: function () {
        this.hasOccupant = true;
    }
}

var powerCord = {
    color: "white",
    pluggedIn: true,
    length: 6,
    unplug: function () {
        pluggedIn = false;
    }
}

var jacket = {
    color: "black",
    zipped: false,
    pocketrs: 3,
    zip: function () {
        zipped = true;
    }
}

var backpack = {
    color: "black",
    contents: [laptop, powerCord],
    full: false,
    popItem: function () {
        return this.contents.pop();
    }
}

backpack.popItem();
console.log(backpack.contents);
