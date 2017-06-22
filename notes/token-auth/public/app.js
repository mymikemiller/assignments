var app = angular.module("TodoApp", ["ngRoute", "Auth"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html"
        })
        .when("/todos", {
            templateUrl: "components/todos/todos.html",
            controller: "TodoController"
        })
});
