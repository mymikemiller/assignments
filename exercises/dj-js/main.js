document.getElementById("square").addEventListener("mouseenter", function () {
    document.getElementById("square").style.backgroundColor = "blue";
});

document.getElementById("square").addEventListener("mousedown", function () {
    document.getElementById("square").style.backgroundColor = "red";
});

document.getElementById("square").addEventListener("mouseup", function () {
    document.getElementById("square").style.backgroundColor = "yellow";
});

document.getElementById("square").addEventListener("dblclick", function () {
    document.getElementById("square").style.backgroundColor = "green";
});

window.addEventListener("wheel", function () {
    document.getElementById("square").style.backgroundColor = "orange";
});

document.addEventListener("keydown", function (event) {
    console.log(event.which);
    switch (event.which) {
        case 66:
            document.getElementById("square").style.backgroundColor = "blue";
            break;
        case 82:
            document.getElementById("square").style.backgroundColor = "red";
            break;
        case 89:
            document.getElementById("square").style.backgroundColor = "yellow";
            break;
        case 71:
            document.getElementById("square").style.backgroundColor = "green";
            break;
        case 79:
            document.getElementById("square").style.backgroundColor = "orange";
            break;
    }
});
