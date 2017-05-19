var isPenguinsTurn;

function Team(name, population) {
    this.name = name;
    this.population = population;
    this.isAlive = function () {
        return this.population > 0;
    }
}


var penguins = new Team("penguins", 1000000);
var communists = new Team("communists", 1000000);

var onHit = function (whoGotNuked) {
    console.log("whoGotNuked: " + whoGotNuked);
    isPenguinsTurn = !isPenguinsTurn;
    whoGotNuked.population = whoGotNuked.population - randNum(10000, 200000);
    console.log(whoGotNuked.name + " got nuked and have " + whoGotNuked.population + " population left.");
}

var onMiss = function (party) {
    isPenguinsTurn = !isPenguinsTurn;
    console.log(party.name + " did not get hit");
}

function sendNuke(party, hit, miss) {
    var success = randNum(0, 3)
    if (success === 0) {
        hit(party);
    } else {
        miss(party);
    }
}

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (randNum(0, 1) === 1) {
    isPenguinsTurn === true;
    sendNuke(penguins, onHit, onMiss);
} else {
    isPenguinsTurn === false;
    sendNuke(communists, onHit, onMiss);
}

while (penguins.isAlive() && communists.isAlive()) {
    if (isPenguinsTurn) {
        sendNuke(communists, onHit, onMiss);
    } else {
        sendNuke(penguins, onHit, onMiss);
    }
}


console.log("Game over");
