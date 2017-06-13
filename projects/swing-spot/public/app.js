var app = angular.module("swingSpotApp", ['ngMap']);
//var scope;

app.controller("MainController", ["$scope", "SpotService", 'NgMap', function ($scope, SpotService, NgMap) {
    //scope = $scope;
    $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDK2NirNh6q_wPXkoT91QDSvRJ0PbogzLE";

    $scope.addSpotMode = false;
    $scope.clickAddSpotModeButton = function () {
        $scope.addSpotMode = !$scope.addSpotMode;
        $scope.deleteSpotMode = false;
    };
    $scope.deleteSpotMode = false;
    $scope.clickDeleteSpotModeButton = function () {
        $scope.deleteSpotMode = !$scope.deleteSpotMode;
        $scope.addSpotMode = false;
        console.log("delete mode");
    };

    this.foo = function (event, arg1, arg2) {
        alert('this is at ' + this.getPosition());
        alert(arg1 + arg2);
    };

    NgMap.getMap().then(function (map) {
        initMap(map);
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);

        google.maps.event.addListener(map, "click", function (e) {

            //var scope = angular.element(document.getElementById('body')).scope();

            if ($scope.addSpotMode) {
                var loc = {
                    lat: parseFloat(e.latLng.lat().toFixed(6)),
                    lng: parseFloat(e.latLng.lng().toFixed(6))
                };

                var spot = {
                    lat: loc.lat,
                    lng: loc.lng,
                    name: ""
                };
                markerManager.addMarker(loc, $scope);

                $scope.addOrUpdateSpot(spot);
            }
        });

        // Populate the page after loading the map
        console.log("calling getSpots");
        $scope.getSpots();
    });


    $scope.getSpots = function () {
        SpotService.getSpots().then(function (response) {
            console.log(response);
            response.data.forEach(function (spot) {
                var coord = {
                    lat: spot.lat,
                    lng: spot.lng
                }
                console.log(JSON.stringify("getSpots got spot at " + coord));

                markerManager.addMarker(coord, $scope);
            });
        });
    }

    $scope.deleteSpot = function (spot) {
        console.log("deleting spot");
        SpotService.deleteSpot(spot._id).then(function (response) {
            for (var i = 0; i < $scope.spots.length; i++) {
                if ($scope.spots[i]._id == response.data._id) {
                    $scope.spots.splice(i, 1);
                    break;
                }
            }
        });
    };

    $scope.addOrUpdateSpot = function (spot) {
        if (spot.hasOwnProperty('_id') && spot._id.length > 0) {
            console.log("update spot: " + JSON.stringify(spot));
            // Update the spot
            SpotService.updateSpot(spot).then(function (response) {
                console.log("update response: " + JSON.stringify(response.data));
                for (var i = 0; i < $scope.spots.length; i++) {
                    if ($scope.spots[i]._id == response.data._id) {
                        $scope.spots.splice(i, 1, response.data);
                        break;
                    }
                }
            });
        } else {
            console.log("add spot");
            // Add the spot
            SpotService.addSpot(spot).then(function (response) {
                console.log("spot added!");
            });
        }
    }

}]);


app.service("SpotService", ["$http", function ($http) {
    this.getSpots = function () {
        return $http.get("/spots").then(function (response) {
            console.log("success");
            console.log(response);
            return response;
        }, function (response) {
            console.log("failure");
            console.log(response);
            return response;
        })
    };
    this.deleteSpot = function (id) {
        console.log("delete " + /spots/ + id);
        return $http.delete("/spots/" + id).then(function (response) {
            console.log("success");
            console.log(response);
            return response;
        }, function (response) {
            console.log("failure");
            console.log(response);
            return response;
        })
    };
    this.addSpot = function (spot) {
        console.log("adding " + JSON.stringify(spot));
        return $http.post('/spots/', spot).then(function (response) {
                console.log("success");
                console.log(response);
                return response;
            },
            function (response) {
                console.log("failure");
                console.log(response);
                return response;
            })
    };
    this.updateSpot = function (spot) {
        console.log("updating now " + JSON.stringify(spot));
        return $http.put('/spots/' + spot._id, spot).then(function (response) {
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
}]);
