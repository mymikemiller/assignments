var app = angular.module("convertTemperaturesApp", []);

app.controller("ConvertTemperaturesCtrl", ["$scope", "currentForcastService", function ($scope, currentForcastService) {
    $scope.num = 100;

    currentForcastService.getCurrentWeather().then(function (response) {
        console.log(response);
        $scope.slcTemp = 500;
    })

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

app.service("currentForcastService", ["$http", function ($http) {
    this.getCurrentWeather = function () {
        return $http.get("https://api.darksky.net/forecast/d2f8c4384f85d6810919ec1bf05530db/40.7608,111.8910")
            .then(
                function (response) {
                    // success
                    console.log("success making request")
                    return response;
                },
                function (response) {
                    //failure
                    console.log("failure making request")
                    return response;
                })
    }
}]);
