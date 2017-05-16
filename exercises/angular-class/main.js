var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", function ($scope) {
    $scope.people = [{
            firstName: "Johnny",
            lastName: "Mathis"
        },
        {
            firstName: "Bugs",
            lastName: "Rabbit"
                },
        {
            firstName: "Helga",
            lastName: "Swenderson"
        }];

    $scope.getFullName = function () {
        return $scope.people[0].firstName + " " + $scope.people[0].lastName;
    }
}]);
