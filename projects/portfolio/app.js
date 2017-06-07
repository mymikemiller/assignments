var app = angular.module("portfolioApp", ["ngRoute"]);



app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "components/about/about.html",
            controller: "AboutCtrl"
        })
        .when("/", {
            templateUrl: "components/about/about.html",
            controller: "AboutCtrl"
        })
        .when("/projects", {
            templateUrl: "components/projects/projects.html",
            controller: "ProjectsCtrl"
        })
}]);
