//mkb
var marker1;
var marker2;
var marker3;
var marker4;

var map;
function initialize() {
    var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(24.126208, -97.741941),
    mapTypeId:google.maps.MapTypeId.TERRAIN
};

    var cs1 ='<div class = "infoWin">' + '<h5>Ojeda Processing Plant</h5>' + '<p>' +'24.126208° Latitude' + '<br>' + '-97.741941° Longitude' + '</p>' + '<small>' + '<a href="#Ojeda" target="_self">More Info</a>' + '<br>' + '</small>'+ '</div>';
    var cs2 = '<div class = "infoWin">' + '<h5>Arana Spar </h5>' + '<p>' +'25.685376° Latitude' + '<br>' + '-94.909758° Longitude' + '</p>' + '<small>' +'<a href="#Arana" target="_self">More Info</a>' + '<br>' + '</small>' + '</div>';
    var cs3 = '<div class = "infoWin">' + '<h5>Quiroga Rig </h5>' + '<p>' +'22.277888° Latitude' + '<br>' + '-94.787785° Longitude' + '</p>' + '<small>' +'<a href="#Quiroga" target="_self">More Info</a>' + '<br>' + '</small>' + '</div>';
    var cs4 =  '<div class = "infoWin">' + '<h5>Orizba Rig </h5>' + '<p>' +'23.272791° Latitude' + '<br>' + '-92.991155° Longitude' + '</p>' + '<small>' +'<a href="#Orizba" target="_self">More Info</a>' + '<br>' + '</small>' + '</div>';
    map = new google.maps.Map(document.getElementById('map-canvas'),
mapOptions);

    var infowindow = new google.maps.InfoWindow({
      content: cs1
  });
    var infowindow1 = new google.maps.InfoWindow({
      content: cs2
  });
    var infowindow2 = new google.maps.InfoWindow({
      content: cs3
  });
    var infowindow3 = new google.maps.InfoWindow({
      content: cs4
  });

    marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(24.126208, -97.741941) ,
    map: map,
    icon: {url: "images/iconPlant.png",
    anchor:new google.maps.Point(18, 18)},
});

    marker1.setMap(map);
    google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map,marker1);
    infowindow1.close(map,marker2);
    infowindow2.close(map,marker3);
    infowindow3.close(map,marker4);
  });


    marker2 = new google.maps.Marker({
    position:new google.maps.LatLng( 25.685376, -94.909758),
    map: map,
    icon :{ url:"images/iconSpar.png",
    anchor:new google.maps.Point(18, 18)},
});
  marker2.setMap(map);
    google.maps.event.addListener(marker2, 'click', function() {
      infowindow1.open(map,marker2);
      infowindow.close(map,marker1);
      infowindow2.close(map,marker3);
      infowindow3.close(map,marker4);
  });



    marker3 = new google.maps.Marker({
    position:new google.maps.LatLng(22.277888, -94.787785),
    map: map,
    icon :{ url: "images/iconRig.png",
    anchor:new google.maps.Point(18, 18)},
});
marker3.setMap(map);
    google.maps.event.addListener(marker3, 'click', function() {
      infowindow2.open(map,marker3);
      infowindow3.close(map,marker4);
      infowindow.close(map,marker1);
      infowindow1.close(map,marker2);
  });


    marker4 = new google.maps.Marker({
    position: new google.maps.LatLng(23.272791, -92.991155),
    map: map,
    icon: {url:  "images/iconRig.png",
    anchor:new google.maps.Point(18, 18)},
    title:"Tampico"
});
marker4.setMap(map);
google.maps.event.addListener(marker4, 'click', function() {
    infowindow3.open(map,marker4);
    infowindow.close(map,marker1);
    infowindow1.close(map,marker2);
	  infowindow2.close(map,marker3);
  });

}

function calcRoute() {
    var start = document.getElementById('start').value;
    var startComma = start.indexOf(',');
    var startLat = parseFloat(start.substring(0, startComma));
    var startLong = parseFloat(start.substring(startComma + 1, start.length));
    var startPoint = new google.maps.LatLng(startLat, startLong);

    var end = document.getElementById('end').value;
    var endComma = end.indexOf(',');
    var endLat = parseFloat(end.substring(0, endComma));
    var endLong = parseFloat(end.substring(endComma + 1, end.length));
    var endPoint = new google.maps.LatLng(endLat, endLong);

	  var flightPlanCoordinates = [startPoint, endPoint];
	var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#ef3e36',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);

    function calcDistance(){
        return Math.round(google.maps.geometry.spherical.computeDistanceBetween(startPoint, endPoint) / 1000);
    }
    document.getElementById("calcDistanceOutput").innerHTML = (calcDistance()) + ' km';
}

google.maps.event.addDomListener(window, 'load', initialize);
