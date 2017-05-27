var app = angular.module("convertTemperaturesApp", []);

app.controller("ConvertTemperaturesCtrl", ["$scope", function ($scope) {
    $scope.num = 100;
}]);

app.filter("temperatureConverter", function () {
    return function (input, whichConversion) {
        if (whichConversion == 'F') {
            return input * (9 / 5) + 32 + "°F";
        } else if (whichConversion == 'C') {
            return (input - 32) * (5 / 9) + "°C";
        } else {
            return input;
        }
    }
});

app.service("currentForcastService", ["http", function ($http) {
    this.getCurrentWeather = function () {
        return $http.get("https://api.darksky.net/forecast/d2f8c4384f85d6810919ec1bf05530db/40.7608,111.8910").then(
            function (response) {
                // success
                return response;
            })
    }
}]);


app.service("TwitchService", ["$http", function ($http) {
    this.searchStreams = function (searchTerm) {
        return $http.get("https://api.twitch.tv/kraken/search/streams?query='" + searchTerm + "'", {
            headers: {
                'Client-ID': 'x47okantt9lixqh8iowlt0jc5kc2cv'
            }
        }).then(function (response) { // Success
            console.log(response);
            return response;
        }, function (response) { // Error
            console.log(response);
            return response;
        })
    }
}]);
