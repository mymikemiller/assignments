var app = angular.module("techlistApp", ["ngRoute"])

app.controller("TechListCtrl", ["$scope", function ($scope) {

}]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/techlist", {
            templateUrl: "components/techlist/techlist.html",
            controller: "TechlistCtrl"
        })
        .when("/otherlist", {
            templateUrl: "components/otherlist/otherlist.html",
            controller: "OtherlistCtrl"
        })

}]);

app.directive("mmListItem", function () {
    return {
        restrict: 'E',
        scope: {
            image: '@',
            name: '@',
            price: '@'
        },
        template: '<li><img src="{{image}}">{{name}}: {{price | currency : "€"}}</li>'
    }
});

app.filter("toEuros", function () {

})
