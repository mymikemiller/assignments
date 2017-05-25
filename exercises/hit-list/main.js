var app = angular.module("HitListApp", []);

app.controller("HitListController", ["$scope", "HttpService", function ($scope, HttpService) {

    $scope.targets = [];
    $scope.getHitList = function () {
        HttpService.getRequest('http://api.vschool.io:6543/hitlist.json').then(function (serviceResponse) {
            $scope.targets = serviceResponse;
        });
    }
}]);

app.service("HttpService", function ($http) {
    this.getRequest = function (url) {
        return $http.get(url).then(
            function (serverResponse) {
                return serverResponse.data;
            },
            function (serverResponse) {
                return serverResponse;
            });
    };
})
