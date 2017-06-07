var readlineSync = require("readline-sync");

var Location = require("./location");


var createGrid = function (num) {
    var grid = [];
    for (var y = 0; y < num; y++) {
        var row = [];
        for (var x = 0; x < num; x++) {
            row.push(new Location());
        }
        grid.push(row);
    }
    return grid;
}

var displayGrid = function (grid) {
    var topRow = "   ";
    for (var x = 0; x < grid.length; x++) {
        topRow += x + " ";
    }
    console.log(topRow);

    for (var y = 0; y < grid.length; y++) {
        var row = y + "  ";
        for (var x = 0; x < grid[0].length; x++) {
            row += grid[x][y].getDisplay() + " ";
        }
        console.log(row);
    }
}

var getNumHits = function (grid) {
    var num = 0;
    for (var y = 0; y < grid.length; y++) {
        for (var x = 0; x < grid[0].length; x++) {
            var location = grid[x][y];
            if (location.isShip && location.guessed) {
                num++;
            }
        }
    }
    return num;
}

var grid = createGrid(10);
console.log("Let's play!");
displayGrid(grid);

while (getNumHits(grid) < 3) {
    console.log();
    var validInput = false;
    while (!validInput) {
        var input = readlineSync.question("Enter space-delimited coordinates (e.g. 3 2): ");
        var split = input.split(" ");
        var x = parseInt(split[0]);
        var y = parseInt(split[1]);
        validInput = x <= grid[0].length && y <= grid.length;
        if (!validInput) {
            console.log("Please enter valid input");
        }
    }

    var location = grid[x][y];
    location.guessed = true;
    if (location.isShip) {
        console.log("Congratulations, you hit a ship!");
    } else {
        console.log("You missed :(");
    }

    displayGrid(grid);
}

console.log("You won!!!")
