// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function initMap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,
        mapTypeControl: false,
        streetViewControl: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(24.165322, 120.634598), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{ "featureType": "all", "elementType": "all", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": -30 }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "color": "#353535" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#656565" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#505050" }] }, { "featureType": "poi", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#454545" }] }, { "featureType": "transit", "elementType": "labels", "stylers": [{ "hue": "#000000" }, { "saturation": 100 }, { "lightness": -40 }, { "invert_lightness": true }, { "gamma": 1.5 }] }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var image = {
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(64, 64),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(30, 28)
    };

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(24.165322, 120.634598),
        map: map,
        icon: image,
        title: 'Gaute!'
    });
}