var app = angular.module("twitchApp");

app.controller("VideoCtrl", ["$scope", "$routeParams", function ($scope, $routeParams) {
    $scope.videoId = $routeParams.videoId;

}]);

app.filter('twitchVideoUrl', function ($sce) {
    return function (videoId) {
        return $sce.trustAsResourceUrl("http://player.twitch.tv/?video=" + videoId + "&autoplay=true");
    };
});
