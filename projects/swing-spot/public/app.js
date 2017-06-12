var app = angular.module("swingSpotApp", []);
var scope;

app.controller("MainController", ["$scope", "LocationService", function ($scope, LocationService) {
    scope = $scope;
    $scope.placeLocationMode = false;
    $scope.clickPlaceButton = function () {
        $scope.placeLocationMode = !$scope.placeLocationMode;
    }

    $scope.getLocations = function () {
        LocationService.getLocations().then(function (response) {
            $scope.locations = response.data;
        });
    }

    $scope.deleteLocation = function (location) {
        console.log(location);
        LocationService.deleteLocation(location._id).then(function (response) {
            for (var i = 0; i < $scope.locations.length; i++) {
                if ($scope.locations[i]._id == response.data._id) {
                    $scope.locations.splice(i, 1);
                    break;
                }
            }
        });
    }

    $scope.addOrUpdateLocation = function (location) {
        if (location.hasOwnProperty('_id') && location._id.length > 0) {
            console.log("update location: " + JSON.stringify(location));
            // Update the location
            LocationService.updateLocation(location).then(function (response) {
                console.log("update response: " + JSON.stringify(response.data));
                for (var i = 0; i < $scope.locations.length; i++) {
                    if ($scope.locations[i]._id == response.data._id) {
                        $scope.locations.splice(i, 1, response.data);
                        break;
                    }
                }
            });
        } else {
            // Add the location
            LocationService.addLocation(location).then(function (response) {
                $scope.locations.push(response.data);
            });
        }
    }

    // Populate the page on load
    $scope.getLocations();
}]);


app.service("LocationService", ["$http", function ($http) {
    this.getLocations = function () {
        return $http.get("/locations").then(function (response) {
            console.log("success")
            console.log(response);
            return response;
        }, function (response) {
            console.log("failure");
            console.log(response);
            return response;
        })
    }
    this.deleteLocation = function (id) {
        console.log("delete " + /locations/ + id);
        return $http.delete("/locations/" + id).then(function (response) {
            console.log("success")
            console.log(response);
            return response;
        }, function (response) {
            console.log("failure");
            console.log(response);
            return response;
        })
    }
    this.addLocation = function (location) {
        console.log("adding " + JSON.stringify(location))
        return $http.post('/locations/', location).then(function (response) {
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
    this.updateLocation = function (location) {
        console.log("updating now " + JSON.stringify(location))
        return $http.put('/locations/' + location._id, location).then(function (response) {
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
