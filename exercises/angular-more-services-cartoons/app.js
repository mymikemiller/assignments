var app = angular.module("cartoonApp", []);

app.controller("CartoonController", ["$scope", "CartoonService", function ($scope, CartoonService) {
    $scope.cartoons = CartoonService.cartoons;

    $scope.clickAddCartoon = function (cartoon) {
        CartoonService.addCartoon(cartoon);
    }
}]);
