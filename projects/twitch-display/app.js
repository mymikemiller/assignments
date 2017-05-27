var app = angular.module("twitchApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "HomeCtrl"
        })
        .when("/streams/:searchTerm", {
            templateUrl: "components/streams/streams.html",
            controller: "StreamsCtrl"
        })
        .when("/videos/:name", {
            templateUrl: "components/videos/videos.html",
            controller: "StreamCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);
