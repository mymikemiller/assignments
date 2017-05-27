var app = angular.module("twitchApp");

app.controller("HomeCtrl", ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.test = "Hello home";
    $scope.clickSearch = function (searchTerm) {
        console.log("click button: " + $scope.gameInput);
        console.log($location.path());
        //$location.path("/streams")
        $window.location.href = "#/streams/" + $scope.gameInput
        console.log($location.path());
    }
}]);
