var markerManager;

//initMap();

function initMap(map) {

    console.log("init map!");

    // var locs = [{lat: 40.762, lng: -111.90},
    //     {lat: 40.766086, lng: -111.894},
    //     {lat: 40.7494, lng: -111.875}];

    // var map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 14,
    //     center: locs[0]
    // });

    var GeoMarker = new GeolocationMarker(map);

    markerManager = new MarkerManager(map);


    //infoWindow = new google.maps.InfoWindow;

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


}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
