var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var arr = [];

for (var i = 0; i < people.length; i++) {
    arr.push(people[i]);
    for (var j = 0; j < alphabet.length; j++) {
        arr.push(alphabet[j].toUpperCase())

    }
}

console.log(arr.join(", "));
