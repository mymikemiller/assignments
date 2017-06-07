var app = angular.module("starWarsApp", []);

app.controller("StarWarsController", ["$scope", "StarWarsService", function ($scope, StarWarsService) {
    $scope.buttonClick = function () {
        StarWarsService.getPeople().then(function (response) {
            console.log(response.data.results);
            $scope.people = response.data.results;
        })
    }
}]);

app.service("StarWarsService", ["$http", function ($http) {
    this.getPeople = function () {
        return $http.get("http://swapi.co/api/people/").then(function (response) {
            return response;
        }, function (response) {
            // Success
            console.log("Error!");
            console.log(response);
            return response;
        })
    }
}]);
