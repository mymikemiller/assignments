var app = angular.module("portfolioApp");

app.controller("NavbarCtrl", ["$scope", "$location", function ($scope, $location) {
    //Enable changing the navbar item's background on click
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);


app.directive("navbar", function () {
    return {
        rectrict: 'E',
        templateUrl: "components/navbar/navbar.html",
        controller: "NavbarCtrl",
        replace: true
    }
});
