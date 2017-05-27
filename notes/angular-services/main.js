var app = angular.module("myApp", []);

app.controller("MainCtrl", ["$scope", "PokemonService", function ($scope, PokemonService) {

    $scope.pokemon;
    $scope.getPokemon = function () {
        PokemonService.getAllPokemon().then(function (serviceResponse) {
            $scope.pokemon = serviceResponse;
        });
    }

    $scope.getPokemon();
}]);

app.service("PokemonService", ["$http", function ($http) {
    this.getAllPokemon = function () {
        var url = "http://pokeapi.co/api/v1/pokemon/1";
        return $http.get(url).then(
            function (serverResponse) {
                return serverResponse.data;
            },
            function (serverResponse) {
                return serverResponse;
            });
    };
}])
