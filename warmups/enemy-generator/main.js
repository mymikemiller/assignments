enemies = []

function Enemy() {
    this.type = getRandomEnemyType();
    this.hitPoints = getHitPoints(this.type);
    this.defense = this.hitPoints * 3;
    this.toString = function () {
        return enemy.type + " (HP: " + enemy.hitPoints + ", defense: " + enemy.defense + ")"
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomEnemyType() {
    switch (getRandomInt(0, 2)) {
        case 0:
            return "Ancient Dragon"
        case 1:
            return "Prowler"
        case 2:
            return "Mighty Grunt"
    }
    return "Unknown";
}

function getHitPoints(enemyType) {
    switch (enemyType) {
        case "Ancient Dragon":
            return getRandomInt(80, 100);
        case "Prowler":
            return getRandomInt(50, 79);
        case "Mighty Grunt":
            return getRandomInt(20, 49);
    }
    return 0;
}


//Main logic

for (var i = 0; i < 100; i++) {
    var enemy = new Enemy();
    enemies.push(enemy);
    console.log(enemy.toString());
}
