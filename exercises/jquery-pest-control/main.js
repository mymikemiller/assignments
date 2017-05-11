var goombaAmount = $("#goombaAmount");
var goombaCost = $("#goombaCost");
var totalGoombaCostElement = $("#totalGoombaCost");

var bobombAmount = $("#bobombAmount");
var bobombCost = $("#bobombCost");
var totalBobombCostElement = $("#totalBobombCost");

var cheepcheepAmount = $("#cheepcheepAmount");
var cheepcheepCost = $("#cheepcheepCost");
var totalCheepcheepCostElement = $("#totalCheepcheepCost");

var totalCost = $("#totalCost");

$("#nightMode").click(function () {
    console.log($("#nightModeBackground").css("display") == "none");
    if ($("#nightModeBackground").css("display") == "none") {
        $("#nightModeBackground").fadeIn(1000);
    } else {
        $("#nightModeBackground").fadeOut(1000);
    }
})


function recalculate() {
    var totalGoombaCost = goombaAmount.html() * goombaCost.html();
    totalGoombaCostElement.html(totalGoombaCost);

    var totalBobombCost = bobombAmount.html() * bobombCost.html();
    totalBobombCostElement.html(totalBobombCost);

    var totalCheepcheepCost = cheepcheepAmount.html() * cheepcheepCost.html();
    totalCheepcheepCostElement.html(totalCheepcheepCost);

    totalCost.html(totalGoombaCost + totalBobombCost + totalCheepcheepCost);
}

function addEnemyDeath(img, enemyAmount) {
    img.mousedown(function (e) {

        // Multiply by 1 to cast the string to an int
        enemyAmount.html(enemyAmount.html() * 1 + 1);
        new Audio("Mario-coin-sound.mp3").play();
        recalculate();
    })
}

function addImageSquish(img) {
    var originalHeight = img.height();
    var originalWidth = img.width();
    img.click(function (e) {
        // Squish the image on click
        var newHeight = originalHeight / 3;
        img.height(newHeight);
        img.width(originalWidth);
        img.css('margin-top', (originalHeight - newHeight) + "px");

        setTimeout(function () {
            img.height(originalHeight);
            img.css('margin-top', 0);
        }, 200)
    })
}

window.onload = function () {
    recalculate();
    addImageSquish($("#goombaImg"));
    addEnemyDeath($("#goombaImg"), goombaAmount);

    addImageSquish($("#bobombImg"));
    addEnemyDeath($("#bobombImg"), bobombAmount);

    addImageSquish($("#cheepcheepImg"));
    addEnemyDeath($("#cheepcheepImg"), cheepcheepAmount);

}
