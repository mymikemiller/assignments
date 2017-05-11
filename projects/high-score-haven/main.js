var trashTalkValues = ["I don't like to trash talk", "I'm a lover, not a fighter", "I did pretty well, didn't I?", "I won, but you'll probably beat me next time"];

// Set the current date
$("input[name = 'date']")[0].valueAsDate = new Date();

function clickSubmit() {
    var theName = $("input[name = 'name']").val();
    var game = $("input[name = 'game']").val();
    var date = $("input[name = 'date']").val();
    var score = $("input[name = 'score']").val();
    var trashTalk = $("input[name = 'trashTalk']").is(":checked");

    if (checkValidInputs(theName, game, date, score)) {

        var scoreTable = $("#scoreTable");
        var tr = $("<tr></tr>").appendTo(scoreTable);
        $("<td>" + theName + "</td>").appendTo(tr);
        $("<td>" + game + "</td>").appendTo(tr);
        $("<td>" + date + "</td>").appendTo(tr);
        $("<td>" + score + "</td>").appendTo(tr);
        if (trashTalk) {
            var rand = Math.floor(Math.random() * trashTalkValues.length);
            console.log(trashTalkValues[rand]);
            $("<td>" + trashTalkValues[rand] + "</td>").appendTo(tr);
        }
    }
}


function checkValidInputs(name, game, date, score) {
    var valid = true;
    if (!name) {
        valid = false;
        $("#invalidName").show();
    } else {
        $("#invalidName").hide();
    }
    if (!game) {
        valid = false;
        $("#invalidGame").show();
    } else {
        $("#invalidGame").hide();
    }
    if (!date) {
        valid = false;
        $("#invalidDate").show();
    } else {
        $("#invalidDate").hide();
    }
    if (!score) {
        valid = false;
        $("#invalidScore").show();
    } else {
        $("#invalidScore").hide();
    }

    return valid;
}
