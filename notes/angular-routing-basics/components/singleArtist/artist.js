var app = angular.module("musicApp");

app.controller("singleArtistCtrl", ["$scope", "$routeParams", "database", function ($scope, $routeParams, database) {
    $scope.artist = {};
    for (var i = 0; i < database.data.length; i++) {
        if (database.data[i]._id === $routeParams.id) {
            $scope.artist = database.data[i];
            console.log($scope.artist);
        }
    }
}])
