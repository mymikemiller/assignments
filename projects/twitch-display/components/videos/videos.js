var app = angular.module("twitchApp");

app.controller("VideosCtrl", ["$scope", "$routeParams", "VideosService", function ($scope, $routeParams, VideosService) {

    console.log($routeParams);
    VideosService.getVideos($routeParams.name).then(function (response) {

        $scope.videos = response.data.videos;

        console.log("videos response:");
        console.log($scope.videos);
    })
}]);

app.service("VideosService", ["$http", function ($http) {
    this.getVideos = function (name) {
        return $http.get("https://api.twitch.tv/kraken/channels/" + name + "/videos", {
            headers: {
                'Client-ID': 'x47okantt9lixqh8iowlt0jc5kc2cv'
            }
        }).then(function (response) {
            //Success
            console.log("Search Videos Success")
            console.log(response);
            return response;
        }).then(function (response) {
            //Failure
            console.log("Search Streams Error");
            console.log(response);
            return response;
        })
    }

}])
