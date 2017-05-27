var app = angular.module("twitchApp");

app.controller("StreamsCtrl", ["$scope", "$routeParams", "TwitchService", function ($scope, $routeParams, TwitchService) {

    TwitchService.searchStreams($routeParams.searchTerm).then(function (response) {
        $scope.streams = response.data.streams;
    })
}]);

app.service("TwitchService", ["$http", function ($http) {
    this.searchStreams = function (searchTerm) {
        return $http.get("https://api.twitch.tv/kraken/search/streams?query='" + searchTerm + "'", {
            headers: {
                'Client-ID': 'x47okantt9lixqh8iowlt0jc5kc2cv'
            }
        }).then(function (response) { // 
            console.log("Search Streams Success")
            console.log(response);
            return response;
        }, function (response) { // Error
            console.log("Search Streams Error")
            console.log(response);
            return response;
        })
    }
}]);
