var goombaAmount = document.getElementById("goombaAmount");
var goombaCost = document.getElementById("goombaCost");
var totalGoombaCostElement = document.getElementById("totalGoombaCost");

var bobombAmount = document.getElementById("bobombAmount");
var bobombCost = document.getElementById("bobombCost");
var totalBobombCostElement = document.getElementById("totalBobombCost");

var cheepcheepAmount = document.getElementById("cheepcheepAmount");
var cheepcheepCost = document.getElementById("cheepcheepCost");
var totalCheepcheepCostElement = document.getElementById("totalCheepcheepCost");

var totalCost = document.getElementById("totalCost");


function recalculate() {
    var totalGoombaCost = goombaAmount.innerHTML * goombaCost.innerHTML;
    totalGoombaCostElement.innerHTML = totalGoombaCost;

    var totalBobombCost = bobombAmount.innerHTML * bobombCost.innerHTML;
    totalBobombCostElement.innerHTML = totalBobombCost;

    var totalCheepcheepCost = cheepcheepAmount.innerHTML * cheepcheepCost.innerHTML;
    totalCheepcheepCostElement.innerHTML = totalCheepcheepCost;

    totalCost.innerHTML = totalGoombaCost + totalBobombCost + totalCheepcheepCost;
}

function addEnemyDeath(img, enemyAmount) {
    img.addEventListener("mousedown", function (e) {

        // Multiply by 1 to cast the string to an int
        enemyAmount.innerHTML = enemyAmount.innerHTML * 1 + 1;
        recalculate();
    })
}

function addImageSquish(img) {
    var originalHeight = img.height;
    var originalWidth = img.width;
    img.addEventListener("mousedown", function (e) {
        // Squish the image on click
        var newHeight = originalHeight / 3;
        img.style.height = newHeight + "px";
        img.style.width = originalWidth + "px";
        img.style.marginTop = originalHeight - newHeight + "px";

        setTimeout(function () {
            img.style.height = originalHeight + "px";
            img.style.marginTop = 0;
        }, 200)
    })
}

window.onload = function () {
    recalculate();
    addImageSquish(document.getElementById("goombaImg"));
    addEnemyDeath(document.getElementById("goombaImg"), goombaAmount);

    addImageSquish(document.getElementById("bobombImg"));
    addEnemyDeath(document.getElementById("bobombImg"), bobombAmount);

    addImageSquish(document.getElementById("cheepcheepImg"));
    addEnemyDeath(document.getElementById("cheepcheepImg"), cheepcheepAmount);

}
