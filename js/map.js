'use strict'

var jordanCoord = { lat: 31.0852, lng: 36.2384 };


var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: new google.maps.LatLng(jordanCoord),
    mapTypeId: 'roadmap'
});

var infowindow;

var marker, i;

for (i = 0; i < allBooks.length; i++) {
    var randomOff = Math.random() * (0.13 + 0.10) - 0.1;
    console.log(randomOff);
    infowindow = new google.maps.InfoWindow({       //Please Style the info window on maps
        content: 'Title: ' + allBooks[i].title +
            '<br><br> Author: ' + allBooks[i].author +
            '<br><br> Phone Number: ' + allBooks[i].number
    });
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(allBooks[i].city.lat + randomOff, allBooks[i].city.lng + randomOff),
        animation: google.maps.Animation.DROP,
        map: map,
        label: (allBooks[i].categories).charAt(0),
        title: allBooks[i].title
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            map.setZoom(9);
            map.setCenter(marker.getPosition());
            infowindow.open(map, marker);
        }
    })(marker, i));



}

map.addListener('click', zoomOut)

function zoomOut() {
    if (event.target) {
        map.setZoom(7);
        map.setCenter(jordanCoord);
        infowindow.close(map);
    }
}