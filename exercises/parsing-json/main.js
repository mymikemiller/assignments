var pokemonName = document.getElementById("pokemonName");
var xhr = new XMLHttpRequest();

function getPokedexNumber(pokemonObj) {
    var uri_array = pokemonObj.resource_uri.split("/");
    var num = uri_array[uri_array.length - 2];
    return num;
}


function parsePokemon(xhrResponse) {
    var responseObj = JSON.parse(xhr.response);
    var pokemon = responseObj.objects[0].pokemon;

    var pokemonOrdered = pokemon.sort(function (a, b) {
        var aNum = getPokedexNumber(a);
        var bNum = getPokedexNumber(b);
        return aNum - bNum;
    });

    //for (var thisPokemon of pokemon) {
    for (var i = 0; i < pokemonOrdered.length; i++) {
        var thisPokemon = pokemonOrdered[i];
        pokemonName.innerHTML += "<h3>" + getPokedexNumber(pokemonOrdered[i]) + ": " + thisPokemon.name + "</h3>";
    }
}


xhr.open("GET", "http://api.vschool.io:6543/pokemon.json");
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        parsePokemon(xhr.response);
    }
}
