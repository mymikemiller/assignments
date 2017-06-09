var app = angular.module("bountyHunterApp", []);

app.controller("BountyHunterController", ["$scope", "BountyHunterService", function ($scope, BountyHunterService) {
    $scope.getBounties = function () {
        BountyHunterService.getBounties().then(function (response) {
            $scope.bounties = response.data;
        });
    }

    $scope.deleteBounty = function (bounty) {
        console.log(bounty);
        BountyHunterService.deleteBounty(bounty._id).then(function (response) {
            for (var i = 0; i < $scope.bounties.length; i++) {
                if ($scope.bounties[i]._id == response.data._id) {
                    $scope.bounties.splice(i, 1);
                    break;
                }
            }
        });
    }

    $scope.addOrUpdateBounty = function (bounty) {
        if (bounty.hasOwnProperty('_id') && bounty._id.length > 0) {
            console.log("update bounty: " + JSON.stringify(bounty));
            // Update the bounty
            BountyHunterService.updateBounty(bounty).then(function (response) {
                console.log("update response: " + JSON.stringify(response.data));
                for (var i = 0; i < $scope.bounties.length; i++) {
                    if ($scope.bounties[i]._id == response.data._id) {
                        $scope.bounties.splice(i, 1, response.data);
                        break;
                    }
                }
            });
        } else {
            // Add the bounty
            BountyHunterService.addBounty(bounty).then(function (response) {
                $scope.bounties.push(response.data);
            });
        }
    }

    // Populate the page on load
    $scope.getBounties();
}]);


app.service("BountyHunterService", ["$http", function ($http) {
    this.getBounties = function () {
        return $http.get("/bounties").then(function (response) {
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
        console.log("delete " + /bounties/ + id);
        return $http.delete("/bounties/" + id).then(function (response) {
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
        return $http.post('/bounties/', bounty).then(function (response) {
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
        console.log("updating now " + JSON.stringify(bounty))
        return $http.put('/bounties/' + bounty._id, bounty).then(function (response) {
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
