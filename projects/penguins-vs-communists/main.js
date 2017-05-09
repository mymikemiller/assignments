function Party(name) {
    this.name = name;
    this.population = 1000000;
}

function sendNuke(party, onHit, onMiss) {
    var hit = Math.random() < 0.5 ? true : false;
    if (hit) {
        onHit(party);
    } else {

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

var penguinsTurn = Math.random() < 0.5 ? true : false;

sendNuke()
