var app = angular.module("convertTemperaturesApp", []);

app.controller("ConvertTemperaturesCtrl", ["$scope", "currentForcastService", function ($scope, currentForcastService) {
    $scope.num = 100;

    $scope.formats = {
        fahrenheit: {
            name: "Fahrenheit",
            symbol: 'F'
        },
        celsius: {
            name: 'Celsius',
            symbol: 'C'
        },
        kelvin: {
            name: 'Kelvin',
            symbol: 'K'
        }
    };

    $scope.temperatureFormatSelected = function () {
        console.log($scope.selectedFormat);
    }

    currentForcastService.getCurrentWeather().then(function (response) {
        console.log(response);
        $scope.slcTemp = response.data.currently.apparentTemperature;
    });

    $scope.selectedFormat = $scope.formats.fahrenheit;

    console.log("hello");
    console.log($scope.selectedFormat);

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

app.filter("fromFahrenheitTemperatureConverter", function () {
    return function (input, whichConversion) {
        if (whichConversion == 'K') {
            return (input + 459.67) * (5 / 9) + "°K";
        } else if (whichConversion == 'C') {
            return (input - 32) * (5 / 9) + "°C";
        } else {
            // Fahrenheit or other
            return input + "°F";
        }
    }
});

app.service("currentForcastService", ["$http", function ($http) {
    this.getCurrentWeather = function () {
        return $http.jsonp("https://api.darksky.net/forecast/d2f8c4384f85d6810919ec1bf05530db/40.7608,111.8910?callback=JSON_CALLBACK").
        success(function (data) {
            console.log("success");
            console.log(data);
            return data;
        }).
        error(function (data) {
            console.log("Failure");
            console.log(data);
            return data;
        });
    }
}]);
