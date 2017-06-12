var markerManager;

initMap();

function initMap() {

    var locs = [{lat: 40.762, lng: -111.90},
        {lat: 40.766086, lng: -111.894},
        {lat: 40.7494, lng: -111.875}];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: locs[0]
    });

    var GeoMarker = new GeolocationMarker(map);

    markerManager = new MarkerManager(map);


    for (var i = 0; i < locs.length; i++) {
        markerManager.addMarker(locs[i]);
    }

    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);

            var closestMarker = markerManager.getClosestMarkerTo(pos);

            var bounds = new google.maps.LatLngBounds();
            //for (var i = 0; i < markerManager.markers.length; i++) {
            bounds.extend(closestMarker.position);
            bounds.extend(pos);
            //}
            map.fitBounds(bounds);

        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    google.maps.event.addListener(map, "click", function (e) {

        //var scope = angular.element(document.getElementById('body')).scope();

        if (scope.placeLocationMode) {
            var loc = {
                lat: parseFloat(e.latLng.lat().toFixed(6)),
                lng: parseFloat(e.latLng.lng().toFixed(6))
            };
            markerManager.addMarker(loc, map);
        }
    });
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
