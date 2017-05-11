function Player() {
    this.name;
    this.totalCoins = 0;
    this.status = "small";
    this.star = false;
    this.setName = function (namePicked) {
        this.name = namePicked;
    }
    this.gotHit = function () {
        console.log("Got hit!");
        switch (this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                this.gameActive = false;
                break;
        }
    }
    this.gotPowerup = function () {
        console.log("Got a power up!");
        this.status = "Powered Up";
    }
    this.gameActive = true;
    this.addCoin = function () {
        console.log("Got a coin!");
        this.totalCoins++;
    }
    this.print = function () {
        console.log("Name: " + this.name);
        console.log("Total Coins: " + this.totalCoins);
        console.log("Status: " + this.status);
        console.log(this.star);
        console.log("Star?: " + (this.star ? "Has Star" : "No Star"));
    }

}

for (var i = 0; i < 3; i++) {
    var mario = new Player();
    mario.setName("Mario");

    var rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            mario.gotHit();
            break;
        case 1:
            mario.gotPowerup();
            break;
        case 2:
            mario.addCoin();
            break;
    }
    mario.print();

    console.log();
}
