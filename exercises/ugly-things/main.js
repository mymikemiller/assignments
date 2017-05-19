var app = angular.module("UglyApp", []);

app.controller("uglyController", ["$scope", function ($scope) {
    $scope.uglies = [{
        title: "This is ugly",
        description: "an ugly thing",
        imageUrl: "http://www.the-proving-grounds.com/favorite_pet/images/ugly.jpeg"
    }]

    $scope.clickSubmit = function (submission) {
        $scope.uglies.push({
            title: submission.title,
            description: submission.description,
            imageUrl: submission.imageUrl
        });

        console.log($scope.uglies);
    }
}])
