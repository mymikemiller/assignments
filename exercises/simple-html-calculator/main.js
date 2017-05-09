document.getElementById("addEquals").addEventListener("click", function () {
    var result = (document.getElementById("add1").value * 1) + (document.getElementById("add2").value * 1);
    document.getElementById("addAnswer").innerHTML = result;
});

document.getElementById("subtractEquals").addEventListener("click", function () {
    var result = (document.getElementById("subtract1").value * 1) - (document.getElementById("subtract2").value * 1);
    document.getElementById("subtractAnswer").innerHTML = result;
});

document.getElementById("multiplyEquals").addEventListener("click", function () {
    var result = (document.getElementById("multiply1").value * 1) * (document.getElementById("multiply2").value * 1);
    document.getElementById("multiplyAnswer").innerHTML = result;
});
