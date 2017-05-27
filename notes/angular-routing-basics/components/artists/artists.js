var app = angular.module("musicApp");

app.controller("artistsCtrl", ["$scope", "database", function ($scope, database) {
    $scope.artists = database.data;
}])
