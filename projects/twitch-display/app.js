var app = angular.module("twitchApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "HomeCtrl"
        })
        .when("/channels/:searchTerm", {
            templateUrl: "components/channels/channels.html",
            controller: "ChannelsCtrl"
        })
        .when("/videos/:name", {
            templateUrl: "components/videos/videos.html",
            controller: "VideosCtrl"
        })
        .when("/video/:videoId", {
            templateUrl: "components/video/video.html",
            controller: "VideoCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);

app.controller("AppCtrl", ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.clickSearch = function (searchTerm) {
        $window.location.href = "#/channels/" + $scope.gameInput
    }
}]);
