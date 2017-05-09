var readlineSync = require('readline-sync');

// Objects
function User(name) {
    this.name = name;
    this.hp = 500;
    this.inventory = [];
}

function Pokemon(name) {
    this.name = name;
    this.hp = 100;
    this.item = null;
}

var wildPokemon = [
    new Pokemon("Pikachu"),
    new Pokemon("Bulbasaur"),
    new Pokemon("Charmander"),
    new Pokemon("Squirtle")
]
wildPokemon[0].item = "pokeball";
wildPokemon[1].item = "potion";

function walk() {
    console.log(user.name + " walks in the tall grass.");

    if (Math.random() < .33) {
        randomEncounter();
    } else {
        console.log("You walk on, but don't encounter any pokemon");
    }
}

function randomEncounter() {
    var enemy = wildPokemon[Math.floor(Math.random() * wildPokemon.length)];
    switch (enemy.name) {
        case "Pikachu":
            printPikachu();
            break;
        case "Bulbasaur":
            printBulbasaur();
            break;
        case "Charmander":
            printCharmander();
            break;
        case "Squirtle":
            printsSquirtle();
            break;
    }
    console.log("A wild " + enemy.name + " appeared!");
    if (battle(enemy)) {
        console.log(user.name + " won the battle!")
    }
}

function battle(enemy) {
    while (user.hp > 0 && enemy.hp > 0) {
        console.log();
        var input = readlineSync.question("You have " + user.hp + " HP and the " + enemy.name + " has " + enemy.hp + " HP. Do you attack [a] or run[r]?")

        switch (input) {
            case 'a':
                attack(enemy);
                if (enemy.hp < 0) {
                    console.log("The " + enemy.name + " has fainted!");
                    if (enemy.item != null) {
                        console.log("You took a " + enemy.item + " from the fainted " + enemy.name);
                        user.inventory.push(enemy.item);
                    } else {
                        console.log("But it didn't have an item for you to take");
                    }
                    // Reset the enemy's HP to 100 to prepare for the next battle
                    enemy.hp = 100;
                    return true;
                }
                enemyAttack(enemy);
                if (user.hp <= 0) {
                    die();
                    return;
                }

                break;
            case 'r':
                if (run()) {
                    return false;
                } else {
                    // Do nothing. Continue with the battle loop.
                }
                break;
        }
    }
}

function attack(enemy) {
    console.log("You attack the " + enemy.name + "...");
    // Attack for between 50 and 150 damage
    var damage = Math.floor(Math.random() * 75) + 25;
    enemy.hp -= damage;
    console.log("...and do " + damage + " damage. The " + enemy.name + " now has " + enemy.hp + " HP.")
}

function enemyAttack(enemy) {
    console.log("The " + enemy.name + " attacks...");
    // Attack for between 50 and 150 damage
    var damage = Math.floor(Math.random() * 75) + 25;
    user.hp -= damage;
    console.log("and does " + damage + " damage. You now have " + user.hp + " HP.")
}

function die() {
    console.log("You have met with a terrible fate. You are dead.");
}

function run() {
    console.log(user.name + " tries to run away...");
    var escape = Math.floor(Math.random() * 2) % 2 == 0 ? true : false;
    if (escape) {
        console.log("...and succeeds!");
    } else {
        console.log("...but fails.");
    }
    return escape;
}

function print() {
    console.log("Pokemon master: " + user.name);
    console.log("HP: " + user.hp);
    console.log("inventory: " + user.inventory);
}

function printPikachu() {
    console.log("       ,___          .-;'");
    console.log("       `\"-.`\\_...._/`.`");
    console.log("    ,      \\        /");
    console.log(" .-' ',    / ()   ()\\");
    console.log("`'._   \\  /()    .  (|");
    console.log("    > .' ;,     -'-  /");
    console.log("   / <   |;,     __.;");
    console.log("   '-.'-.|  , \    , \\");
    console.log("      `>.|;, \_)    \\_)");
    console.log("       `-;     ,    /");
    console.log("          \\    /   <");
    console.log("           '. <`'-,_)");
    console.log("            '._))");
}

function printBulbasaur() {
    console.log("             `;,;.;,;.;.'");
    console.log("              ..:;:;::;: ");
    console.log("        ..--''' '' ' ' '''--.  ");
    console.log("      /' .   .'        '.   .`\\");
    console.log("     | /    /            \\   '.|");
    console.log("     | |   :             :    :|");
    console.log("   .'| |   :             :    :|");
    console.log(" ,: /\\ \\.._\\ __..===..__/_../ /`.");
    console.log("|'' |  :.|  `'          `'  |.'  ::.");
    console.log("|   |  ''|    :'';          | ,  `''\\");
    console.log("|.:  \\/  | /'-.`'   ':'.-'\\ |  \\,   |");
    console.log("| '  /  /  | / |...   | \\ |  |  |';'|");
    console.log(" \\ _ |:.|  |_\\_|`.'   |_/_|  |.:| _ |");
    console.log("/,.,.|' \\__       . .      __/ '|.,.,\\");
    console.log("     | ':`.`----._____.---'.'   |");
    console.log("      \\   `:\"\"\"-------'\"\"' |   |");
    console.log("       ',-,-',             .'-=,=,");
}

function printCharmander() {
    console.log("              _.--\"\"`-..");
    console.log("            ,'          `.");
    console.log("          ,'          __  `.");
    console.log("         /|          \" __   \\");
    console.log("        , |           / |.   .");
    console.log("        |,'          !_.'|   |");
    console.log("      ,'             '   |   |");
    console.log("     /              |`--'|   |");
    console.log("    |                `---'   |");
    console.log("     .   ,                   |                       ,\\\".");
    console.log("      ._     '           _'  |                    , ' \\ `");
    console.log("  `.. `.`-...___,...---\"\"    |       __,.        ,`\\\"   L,|");
    console.log("  |, `- .`._        _,-,.'   .  __.-'-. /        .   ,    \\");
    console.log("-:..     `. `-..--_.,.<       `\"      / `.        `-/ |   .");
    console.log("  `,         \"\"\"\"'     `.              ,'         |   |  ',,");
    console.log("    `.      '            '            /          '    |'. |/");
    console.log("      `.   |              \\       _,-'           |       ''");
    console.log("        `._'               \\   '\"\\                .      |");
    console.log("           |                '     \\                `._  ,'");
    console.log("           |                 '     \\                 .'|");
    console.log("           |                 .      \\                | |");
    console.log("           |                 |       L              ,' |");
    console.log("           `                 |       |             /   '");
    console.log("            \\                |       |           ,'   /");
    console.log("          ,' \\               |  _.._ ,-..___,..-'    ,'");
    console.log("         /     .             .      `!             ,j'");
    console.log("        /       `.          /        .           .'/");
    console.log("       .          `.       /         |        _.'.'");
    console.log("        `.          7`'---'          |------\"'_.'");
    console.log("       _,.`,_     _'                ,''-----\"'");
    console.log("   _,-_    '       `.     .'      ,\\");
    console.log("   -\" /`.         _,'     | _  _  _.|");
    console.log("    \"\"--'---\"\"\"\"\"'        `' '! |! /");
    console.log("                            `\" \" -' ");
}

function printsSquirtle() {
    console.log("          ___                   ");
    console.log("     _.-~~   ~~~-.              ");
    console.log("    /         _   ~.            ");
    console.log("   |#`       /#`    \\           ");
    console.log("   |-'|      |-'|    |          ");
    console.log("   /--        --     |-.        ");
    console.log("   \\__   .  .        / /\\_      ");
    console.log("    \\ ~~--___---~~/\\| |   ~-.   ");
    console.log(" .---`~~--____---_)  \ \-__  \  ");
    console.log(" ) <    |__    __\\_   \\ \\     | ");
    console.log(" ~-.__ /   ~~~~   \\   \\ \\     | ");
    console.log("      ~-.   |     .~-.-' |    | ");
    console.log("       | \\___|___/     / /     |");
    console.log("       | /   |   \\     | |  /  |");
    console.log("        \\     |   ~-___ \\ \\/  / ");
    console.log("        /\\__ / `._ /   ~-\\ \\_/  ");
    console.log("       /    \\_____|      |`~    ");
    console.log("      |      |    |      |      ");
    console.log("       \\     |    |      |      ");
    console.log("       >______)   /_/\\/\\_\\      ");
}


// Game logic
console.log("Welcome to the Colossal Pokemon Adventure! Get ready to catch 'em all!")

var name = readlineSync.question('First, may I have your name? ');
user = new User(name);

// Main game loop
while (user.hp > 0) {
    console.log();
    console.log("Enter 'w' to walk in the tall grass. Beware of wild Pokemon! Enter 'print' to see your stats.");

    var input = readlineSync.question("What will you do?");

    if (input === "w") {
        walk();
    } else if (input === "print") {
        print();
    } else {
        console.log("I don't understand what you typed");
    }
}
