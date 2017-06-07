var app = angular.module("twitchApp");

app.controller("VideoCtrl", ["$scope", "$routeParams", "VideoService", function ($scope, $routeParams, VideoService) {
    $scope.videoId = $routeParams.videoId;

    VideoService.getVideo($routeParams.videoId).then(function (response) {
        console.log("got video response");
        console.log(response);
        $scope.video = response.data;

        // Set the height and width of the video
        var resolutions = $scope.video.resolutions;
        // Select the last in the list (object) of resolutions
        var res = resolutions[Object.keys(resolutions)[Object.keys(resolutions).length - 1]];
        var resSplit = res.split("x");
        $scope.videoWidth = 600;
        //(h / w) * videoWidth = targetHeight;
        $scope.videoHeight = (resSplit[1] / resSplit[0]) * $scope.videoWidth;
    });

}]);

app.filter('twitchVideoUrl', function ($sce) {
    return function (videoId) {
        return $sce.trustAsResourceUrl("http://player.twitch.tv/?video=" + videoId + "&autoplay=true");
    };
});

app.service("VideoService", ["$http", function ($http) {
    this.getVideo = function (id) {
        return $http.get("https://api.twitch.tv/kraken/videos/" + id, {
            headers: {
                'Client-ID': 'x47okantt9lixqh8iowlt0jc5kc2cv'
            }
        }).then(function (response) {
            //Success
            return response;
        }, function (response) {
            //Failure
            console.log("getVideo failure");
            console.log(response);
        });
    }
}]);
