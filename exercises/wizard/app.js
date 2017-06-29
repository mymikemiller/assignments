class Wizard {
    constructor(name, hp, spells) {
        this.name = name;
        this.hp = hp;
        this.spells = spells;
    }

    wasAttackedBy(spell) {
        this.hp -= spell.damage;
    }
}

let lumos = {
    name: "lumos",
    damage: 25
}
let alohamora = {
    name: "alohamora",
    damage: 30
}
let destructo = {
    name: "destructo",
    damage: 70
}

var mike = new Wizard("mike", 100, [lumos, alohamora]);
mike.wasAttackedBy(destructo);
var melissa = new Wizard("melissa", 100, [alohamora, destructo]);
var carlie = new Wizard("carlie", 100, [destructo, lumos]);

console.log(mike);