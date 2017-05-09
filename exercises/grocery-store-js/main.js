var shopper = {
    name: "Mike",
    id: 404,
    alive: true,
    shoppingCart: ["bread", "milk", "eggs"],
    printInfo: function () {
        console.log(this.name + ": " + this.id);
    }
};

shopper.printInfo();
