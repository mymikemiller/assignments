function addItem() {
    $("#list").append("<li><button type='button' onclick='removeItem(this)'>X</button>" + $("#textBox").val() + "</li>");
}

function removeItem(button) {
    button.parentElement.parentElement.removeChild(button.parentElement);
}
