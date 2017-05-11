$(document).ready(function () {
    $.get("https://api.vschool.io/mike/todo", function (data, status) {
        data.forEach(function (val, index, array) {

            var table = $("#table");
            var tr = $("<tr></tr>").appendTo(table);
            $("<td>" + val.title + "</td>").appendTo(tr);
            $("<td>" + val.price + "</td>").appendTo(tr);
            $("<td>" + val.description + "</td>").appendTo(tr);
            var checked = val.completed ? " checked" : "";
            var checkbox = $('<input type="checkbox" name="completed" class="completedCheckbox"' + checked + '>');
            checkbox.appendTo(tr);
            checkbox.change(function () {
                if (this.checked) {
                    $(this).closest("tr").addClass("strikeout");
                } else {
                    $(this).closest("tr").removeClass("strikeout");
                }
            });

            $('<td><img src="' + val.imgUrl + '" height="42" width="42"></td>').appendTo(tr);

            if (val.completed) {
                tr.toggleClass("strikeout");
            }

        });
    });
});

function clickSubmit() {
    var item = $("#title").val();
    var price = $("#price").val();
    var description = $("#description").val();
    var completed = $("#completed").is(":checked");
    var image = $("#image").val();

    var newTodo = {
        title: item, // this one is the only thing that is actually required
        description: description,
        price: price, // Must be a number of some kind (integer or float)
        imgUrl: image,
        completed: completed // must be a boolean (true or false). If nothing provided, defaults to false.
    };

    $.ajax({
        url: 'https://api.vschool.io/mike/todo',
        type: 'POST',
        data: JSON.stringify(newTodo),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    });
}
