function Party(name) {
    this.name = name;
    this.population = 1000000;
}

function sendNuke(party, onHit, onMiss) {
    var hit = Math.random() < 0.5 ? true : false;
    if (hit) {
        onHit(party);
    } else {
        onMiss(party);
    }
}

function hit(attackedParty) {
    var damage = Math.floor(Math.random() * 100000);
    attackedParty.population -= damage;
    console.log("The " + getOtherParty(attackedParty).name + " attacked the " + attackedParty.name + " and did " + damage + " damage. The " + attackedParty.name + " now have " + attackedParty.population + " population.");
}

function miss(missedParty) {
    console.log("The " + getOtherParty(missedParty).name + " missed the " + missedParty.name);
}

function getOtherParty(party) {
    return party == penguins ? communists : penguins;
}

var penguins = new Party("Penguins");
var communists = new Party("Communists");

// Randomly select who attacks first
var attackedParty = Math.random() < 0.5 ? penguins : communists;

while (attackedParty.population > 0 && getOtherParty(attackedParty).population > 0) {
    sendNuke(attackedParty, hit, miss);
    var attackedParty = getOtherParty(attackedParty);
}

var winner = penguins.population > 0 ? penguins : communists;

console.log("The " + winner.name + " won!");
