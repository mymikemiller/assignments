var app = angular.module("favoriteStateApp", ["ngRoute"])

app.controller("FavoriteStateCtrl", ["$scope", function ($scope) {

}]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "HomeCtrl"
        })
        .when("/about", {
            templateUrl: "components/about/about.html",
            controller: "AboutCtrl"
        })
        .when("/why-i-love", {
            templateUrl: "components/why-i-love/why-i-love.html",
            controller: "WhyILoveCtrl"
        });

}]);

app.directive("mikeTheMink", function () {
    return {
        templateUrl: 'mikeTheMink.html'
    };
})
