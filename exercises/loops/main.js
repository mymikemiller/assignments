function split() {
    var str = document.getElementById("stringToSplit").value;
    var response = "";

    for (var i = 0; i < str.length; i++) {
        response += str[i] + "<br>";
    }

    document.getElementById("splitOutput").innerHTML = response;
}

function search() {
    var stringToSearch = document.getElementById("stringToSearch").value;
    var charToSearchFor = document.getElementById("charToSearchFor").value;
    document.getElementById("searchOutput").innerHTML = searchStringForChar(stringToSearch, charToSearchFor);
}

function searchStringForChar(stringToSearch, charToSearchFor) {
    var response = "The character was not found."

    for (var i = 0; i < stringToSearch.length; i++) {
        if (stringToSearch[i] === charToSearchFor) {
            response = "The character is in position " + i;
        }
    }
    return response;
}

function searchNumbers() {
    var numberArray = document.getElementById("numberArray").value.split(" ");
    document.getElementById("searchNumbersOutput").innerHTML = findNumber(numberArray, 42);
    document.getElementById("lowestNumberOutput").innerHTML = "The lowest number is " + findLowestNumber(numberArray);
}

function findNumber(numberArray, numberToFind) {
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] == numberToFind) {
            return "Found at index " + i;
        }
    }
    return numberToFind + " was not found.";
}


function findLowestNumber(numberArray) {
    var lowestNumber = Number.POSITIVE_INFINITY;
    numberArray.forEach(function (value) {
        lowestNumber = Math.min(lowestNumber, value);
    });
    return lowestNumber;
}
