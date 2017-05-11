var pokemonName = $("#pokemonName");
var xhr = new XMLHttpRequest();

function getPokedexNumber(pokemonObj) {
    var uri_array = pokemonObj.resource_uri.split("/");
    var num = uri_array[uri_array.length - 2];
    return num;
}


function parsePokemon(json) {
    var pokemon = json.pokemon;

    var pokemonOrdered = pokemon.sort(function (a, b) {
        var aNum = getPokedexNumber(a);
        var bNum = getPokedexNumber(b);
        return aNum - bNum;
    });

    //for (var thisPokemon of pokemon) {
    for (var i = 0; i < pokemonOrdered.length; i++) {
        var thisPokemon = pokemonOrdered[i];
        pokemonName.append("<span>" + getPokedexNumber(pokemonOrdered[i]) + ": " + thisPokemon.name + "</span>, ");
    }
}

// Using the core $.ajax() method
$.ajax({

    // The URL for the request
    url: "http://pokeapi.co/api/v1/pokedex/1/",

    // Whether this is a POST or GET request
    type: "GET",

    // The type of data we expect back
    dataType: "json",

    // Code to run if the request succeeds;
    // the response is passed to the function
    success: function (json) {
        parsePokemon(json);
    },

    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: function (xhr, status, errorThrown) {
        alert("Sorry, there was a problem!");
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        console.dir(xhr);
    }
});
