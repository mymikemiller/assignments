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
    console.log("The " + attackedParty == penguins ? communists.name : penguins.name + " attacked the " + missedParty.name + " and did " + damage + " damage. The " + attackedParty + " now has " + attackedParty.population + " population.");
}

function miss(missedParty) {
    console.log("The " + missedParty == penguins ? communists.name : penguins.name + " missed the " + missedParty.name);
}

var penguins = new Party("Penguins");
var communists = new Party("Communists");

// Randomly select who attacks first
var attackingParty = Math.random() < 0.5 ? true : false;

while (attackedParty.population > 0 && attackingParty.population > 0) {
    var attackedParty = attackingParty = penguins ? communists : penguins;
    sendNuke(attackedParty, hit, miss);
}
