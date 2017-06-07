var app = angular.module("twitchApp");

app.controller("ChannelsCtrl", ["$scope", "$routeParams", "ChannelsService", function ($scope, $routeParams, TwitchService) {

    TwitchService.searchChannels($routeParams.searchTerm).then(function (response) {
        $scope.channels = response.data.channels;
    })
}]);

app.service("ChannelsService", ["$http", function ($http) {
    this.searchChannels = function (searchTerm) {
        return $http.get("https://api.twitch.tv/kraken/search/channels?query='" + searchTerm + "'", {
            headers: {
                'Client-ID': 'x47okantt9lixqh8iowlt0jc5kc2cv'
            }
        }).then(function (response) { // 
            console.log("Search Channels Success")
            console.log(response);
            return response;
        }, function (response) { // Error
            console.log("Search Channels Error")
            console.log(response);
            return response;
        })
    }
}]);
