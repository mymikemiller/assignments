var app = angular.module("MyApp", []);
var scope;

app.controller("MainController", ["$scope", function ($scope) {
    scope = $scope;
    $scope.placeLocationMode = false;
    $scope.clickPlaceButton = function () {
        $scope.placeLocationMode = !$scope.placeLocationMode;
    }
}]);