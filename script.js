/* global $, google */

function createMap(){
    console.log('creating map...')


    // create a location
    var cristoRey = new google.maps.LatLng(40.792451,-73.947345)
    
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,
        
        // The latitude and longitude to center the map (always required)
        center: cristoRey,
        
        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#46bcec"
            }, {
                "visibility": "on"
            }]
        }]
    };
    
    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    
    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    // example of creating a marker
    var marker = new google.maps.Marker({
        position: cristoRey,
        map: map,
        title: 'Cristo Rey!'
    });
    
    // example of the geocoding service
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': 'new york, ny'
    }, function(results) {
        console.log(results)
    });
    
    // example of the places service
    var service = new google.maps.places.PlacesService(map);
    service.textSearch({
        location: cristoRey,
        radius: 100,
        query: 'coffee'
    }, function(results) {
        console.log(results)
    });
    
}

$(document).ready(function(){
    console.log('document ready')
    createMap();
})