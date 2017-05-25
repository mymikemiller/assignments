var app = angular.module("clickerApp", []);

app.controller("ColorController", ["$scope", "RedService", "BlueService", function ($scope, RedService, BlueService) {
    $scope.redScore = RedService.score;
    $scope.blueScore = BlueService.score;

    $scope.clickRedButton = function () {
        RedService.increment();
        BlueService.decrement();
        $scope.redScore = RedService.score;
        $scope.blueScore = BlueService.score;
    }

    $scope.clickBlueButton = function () {
        RedService.decrement();
        BlueService.increment();
        $scope.redScore = RedService.score;
        $scope.blueScore = BlueService.score;
    }

}]);

app.service("RedService", function () {
    this.score = 100;

    this.increment = function () {
        this.score++;
    }
    this.decrement = function () {
        this.score--;
        if (this.score == 0) {
            this.reset();
        }
    }
    this.reset = function () {
        this.score = 100;
    }
});

app.service("BlueService", function () {
    this.score = 100;

    this.increment = function () {
        this.score++;
    }
    this.decrement = function () {
        this.score--;
        if (this.score == 0) {
            this.reset();
        }
    }
    this.reset = function () {
        this.score = 100;
    }
});
