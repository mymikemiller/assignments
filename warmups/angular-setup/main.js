var app = angular.module("myApp", []);

app.controller("MyAddController", ["$scope", function ($scope) {

    $scope.addClick = function (input) {
        $scope.addResult = input.first + input.second;
    }

}]);

app.controller("MyMultiplyController", ["$scope", function ($scope) {

    $scope.multiplyClick = function (input) {
        $scope.multiplyResult = input.first * input.second;
    }

}]);
