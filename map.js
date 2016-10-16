var map;
var panorama;
var spinning;
var count = 0;
var coords = [
    {lat: 49.288985, lng: -123.143520},
    {lat: 49.2688016, lng: -123.1776981},
    {lat: 47.6129639, lng: -122.3201224},
    {lat: 41.955328, lng: 12.7684927},
    {lat: 1.2859962, lng: 103.8608916},
    {lat: 37.4290917, lng: -122.1696737},
];
var lngArray;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: coords[count],
      zoom: 13
    });
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            position: coords[count],
            addressControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_CENTER
            },
            linksControl: false,
            panControl: false,
            enableCloseButton: false,
            pov: {
                heading: 0,
                pitch: 0
            }
        });
    map.setStreetView(panorama);
}

function spin() {
    spinning = setInterval(function () {
        var pov = panorama.getPov();
        pov.heading += 1;
        panorama.setPov(pov);
    }, 50)
}

function changeLoc() {
    if (count < coords.length - 1) {
        count += 1;
    }
    else {
        count = 0;
    }
    map = new google.maps.Map(document.getElementById('map'), {
        center: coords[count],
        zoom: 13
    });
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            position: coords[count],
            addressControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_CENTER
            },
            linksControl: false,
            panControl: false,
            enableCloseButton: false
        });
    map.setStreetView(panorama);
}