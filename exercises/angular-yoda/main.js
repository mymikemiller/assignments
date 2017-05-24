var app = angular.module("YodaApp", []);

app.controller("yodaController", ["$scope", "httpService", function ($scope, httpService) {

    $scope.clickSpeak = function () {

        var url = "https://yoda.p.mashape.com/yoda?sentence=" + $scope.input;

        var config = {
            headers: {
                'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
            }
        };

        var result = httpService.getRequest(url, config).then(function (serviceResponse) {
            $scope.yodaSpeak = serviceResponse;
        });

    }


}]);


app.service("httpService", function ($http) {
    this.getRequest = function (url, config) {
        return $http.get(url, config).then(
            function (serverResponse) {
                return serverResponse.data;
            },
            function (serverResponse) {
                return serverResponse;
            });
    };
});
