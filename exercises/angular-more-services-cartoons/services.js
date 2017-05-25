var app = angular.module("cartoonApp");

app.service("CartoonService", function () {
    this.cartoons = [];
    var cartoon = {
        title: "Pinky and the Brain",
        description: "Try to take over the world.",
        imgUrl: "http://images.mentalfloss.com/sites/default/files/pinky_primary.jpg?resize=1100x740"
    }
    this.cartoons.push(cartoon);

    this.addCartoon = function (cartoon) {
        this.cartoons.push(cartoon);
        console.log(this.cartoons);
    }
});
