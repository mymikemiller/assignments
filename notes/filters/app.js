var app = angular.module("angularFilters", []);

app.controller("mainController", ['$scope', function ($scope) {
    $scope.test = 50;
    $scope.test2 = 50.458
}]);

app.filter("filterName", function (input, whichConversion) {
    return function (input, whichConversion) {
        if (whichConversion == 'F') {
            return input * (9 / 5) + 32;
        } else if (whichConversion == 'C') {
            return (input - 32) * (5 / 9);
        } else {
            return input;
        }
    }
});