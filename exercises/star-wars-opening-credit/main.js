var app = angular.module("SWApp", []);


app.controller("MainController", ["$scope", "httpService", function ($scope, httpService) {

    angular.element(document).ready(function () {
        $scope.getSWText();
    });

    $scope.swText;
    $scope.getSWText = function () {
        httpService.getRequest('http://swapi.co/api/films/1/').then(function (serviceResponse) {
            $scope.swText = serviceResponse.opening_crawl;
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
