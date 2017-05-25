var app = angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/recipes", {
            templateUrl: "components/recipe-list/recipe-list.html",
            controller: "RecipeListCtrl"
        })
        .when("/recipes/:recipeId", {
            templateUrl: "components/recipe-detail/recipe-detail.html",
            controller: "RecipeDetailCtrl"
        })
        .otherwise({
            redirectTo: "/recipes"
        });
}]);
