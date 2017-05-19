var app = angular.module("BadgeApp", []);

app.controller("BadgeController", ["$scope", function ($scope) {
    $scope.badges = [{
            firstName: "Mike",
            lastName: "Miller",
            email: "mikem.exe@gmail.com",
            birthPlace: "Milwaukee, WI",
            phone: 7078675350,
            favoriteFood: "Chicken Strips",
            about: "I'm just me"
        }
    ];

    $scope.clickSubmit = function (user) {
        $scope.badges.push(user);
        $scope.user = {}; // Clear the input fields
    };

}]);
