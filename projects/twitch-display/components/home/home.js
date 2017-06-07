var app = angular.module("twitchApp");

app.controller("HomeCtrl", ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.test = "Hello home";
}]);
