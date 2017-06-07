var app = angular.module("bountyHunterApp", []);

app.controller("BountyHunterController", ["$scope", "BountyHunterService", function ($scope, BountyHunterService) {
    $scope.getBounties = function () {
        BountyHunterService.getBounties().then(function (response) {
            $scope.bounties = response.data;
        });
    }

    $scope.deleteBounty = function (bounty) {
        console.log(bounty);
        BountyHunterService.deleteBounty(bounty._id);
        for (var i = 0; i < $scope.bounties.length; i++) {
            if ($scope.bounties[i]._id == bounty._id) {
                $scope.bounties.splice(i, 1);
            }
        }
    }

    $scope.addOrUpdateBounty = function (bounty) {
        console.log("addOrUpdateBounty: " + JSON.stringify(bounty));
        if (bounty.hasOwnProperty('_id') && bounty._id.length > 0) {
            // Update the bounty
            BountyHunterService.updateBounty(bounty);
            $scope.bounties = response.data;
        } else {
            // Add the bounty
            BountyHunterService.addBounty(bounty);
            $scope.bounties.push(bounty);
        }
        $scope.getBounties();
    }

    $scope.getBounties();
}]);


app.service("BountyHunterService", ["$http", function ($http) {
    this.getBounties = function () {
        return $http.get("/bounty").then(function (response) {
            console.log("success")
            console.log(response);
            return response;
        }, function (response) {
            console.log("failure");
            console.log(response);
            return response;
        })
    }
    this.deleteBounty = function (id) {
        console.log("delete " + /bounty/ + id);
        return $http.delete("/bounty/" + id).then(function (response) {
            console.log("success")
            console.log(response);
            return response;
        }, function (response) {
            console.log("failure");
            console.log(response);
            return response;
        })
    }
    this.addBounty = function (bounty) {
        console.log("adding " + JSON.stringify(bounty))
        return $http.post('/bounty/', bounty).then(function (response) {
                console.log("success");
                console.log(response);
                return response;
            },
            function (response) {
                console.log("failure");
                console.log(response);
                return response;
            })
    }
    this.updateBounty = function (bounty) {
        console.log("updating " + JSON.stringify(bounty))
        return $http.put('/bounty/' + bounty._id, bounty).then(function (response) {
                console.log("success");
                console.log(response);
                return response;
            },
            function (response) {
                console.log("failure");
                console.log(response);
                return response;
            })
    }
}])
