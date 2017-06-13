function MarkerManager(map) {
    this.markers = [];
    this.map = map;
    var self = this;

    this.addMarker = function (loc, scope) {
        console.log("Adding marker at " + JSON.stringify(loc));
        var marker = new google.maps.Marker({
            position: loc,
            map: this.map
        });

        marker.addListener('click', function () {
            console.log("clicked marker " + marker);
            if (scope.deleteSpotMode) {
                console.log("removing marker " + marker);
                self.removeMarker(marker);
                //scope.deleteSpot()
            }
        });

        this.markers.push(marker);
    };

    this.removeMarker = function (marker) {
        this.markers.forEach(function (currentMarker, index, array) {
            if (currentMarker === marker) {
                array.splice(index, 1);
                currentMarker.setMap(null);
            }
        });
    }


    this.getClosestMarkerTo = function (loc) {
        var closest = undefined;
        var closestDistance = undefined;
        this.markers.forEach(function (marker) {
            var currentDistance = getDistance(loc, marker.position);
            if (closest == undefined || currentDistance < closestDistance) {
                closest = marker;
                closestDistance = currentDistance;
            }
        });
        console.log("Found closest distance: " + closestDistance);
        return closest;
    };
}

getDistance = function (loc1, loc2) {
    console.log(JSON.stringify(loc1) + " " + JSON.stringify(loc2));
    var lat1 = loc1.lat;
    var lat2 = loc2.lat();
    var lng1 = loc1.lng;
    var lng2 = loc2.lng();
    return Math.sqrt((lat2 - lat1) * (lat2 - lat1) + (lng2 - lng1) * (lng2 - lng1));
};