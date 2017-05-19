var app = angular.module("HitListApp", []);

app.controller("HitListController", ["$scope", "httpService", function ($scope, httpService) {

    $scope.targets = [];
    $scope.getHitList = function () {
        httpService.getRequest('http://api.vschool.io:6543/hitlist.json').then(function (serviceResponse) {
            $scope.targets = serviceResponse;
        });
    }
}]);

app.service("httpService", function ($http) {
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
