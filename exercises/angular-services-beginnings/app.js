var app = angular.module("pokemonList", []);

app.controller("PokeAddRemoveController", ["$scope", "PokeService", function ($scope, PokeService) {
    // Add a default favorite pokemon because everyone loves Pikachu
    PokeService.addPokemon("pikachu");

    $scope.clickAddPokemon = function (name) {
        PokeService.addPokemon(name);
    }
    $scope.clickRemovePokemon = function (name) {
        PokeService.removePokemon(name);
    }
}]);

app.controller("PokeDisplayController", ["$scope", "PokeService", function ($scope, PokeService) {
    $scope.pokemon = PokeService.pokemon;
}]);


app.service("PokeService", ["$http", function ($http) {

    this.pokemon = [];

    this.addPokemon = function (name) {
        this.pokemon.push(name);
    }

    this.removePokemon = function (name) {
        this.pokemon.splice(this.pokemon.indexOf(name), 1);
    }
}]);
