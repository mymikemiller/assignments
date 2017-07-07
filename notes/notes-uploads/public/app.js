angular.module("myApp", ["ngFileUpload"])

.controller("MainController", ["$scope", "$http", "Upload", function ($scope, $http, Upload) {

    $scope.submit = function (file, user) {
        upload(file, user);
    };

    function upload(file, user) {
        Upload.upload({
            url: "/api/upload",
            data: {file: file, info: user}
        }).then(function (response) {
            $scope.users.push(response.data);
        });
    }

    $scope.users = [];
    $http.get("/api/users").then(function (response) {
        $scope.users = response.data;
    });

}]);
