var app = angular.module("myApp");

app.controller("RecipeDetailCtrl", ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
    $http.get("recipes.json")
        .then(function (response) {
//        console.log(response.data);
//        console.log()
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].id === parseInt($routeParams.recipeId)) {
                    $scope.recipe = response.data[i];
                }
            }
        });
    // GET request to get the recipe with the id of {{ $routeParams.recipeId }}





}]);
