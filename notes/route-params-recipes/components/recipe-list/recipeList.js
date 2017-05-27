var app = angular.module("myApp");

app.controller("RecipeListCtrl", ["$scope", "$http", function($scope, $http) {
    
    $http.get("recipes.json").then(function(response) {
        $scope.recipes = response.data;
    });
}])