$(document).ready(function () {
    resizeInstagramImages();
});
$(window).resize(function () {
    resizeInstagramImages();
});

function resizeInstagramImages() {
    var newWidth = window.innerWidth;
    if (window.innerWidth > 640) {
        newWidth = window.innerWidth / 10;
    } else if (window.innerWidth > 480) {
        newWidth = window.innerWidth / 4;
    }
    $(".instagramImage").width(newWidth);
    $(".instagramImage").height(newWidth);
}
