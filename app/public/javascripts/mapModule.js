(function() {
  'use strict';

  //register the service object ('notify').  This will need to be injected in all
  //parts of the app that will reference the map
  angular.module('myApp')
    .service('notify', notify)

  function notify() {
    this.onInit = function() {
      if ("geolocation" in navigator) {
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(function(position) {
          initMap(position.coords.latitude, position.coords.longitude, "");
        });
      } else {
        /* geolocation IS NOT available */
        alert('geolocation not available');
      }


      function initMap(latitude, longitude, initial) {
        if (initial.length === 0) {
          var labels = ['You Are Here'];
        } else {
          var labels = ['Start in ' + initial];
        }

        console.log("In initMap");

        var startLocation = {
          lat: parseFloat(latitude),
          lng: parseFloat(longitude)
        };

        console.log('startLocation = ' + JSON.stringify(startLocation));

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: startLocation
        });
        var marker = new google.maps.Marker({
          position: startLocation,
          label: labels[0],
          map: map,

        });

        addNearbyMarkers(map);
      } //End initMap



      function addNearbyMarkers(map, startLat, startLong) {

        var latlng = new google.maps.LatLng(30.2660387, -97.7496372);

        var marker = new google.maps.Marker({
          position: latlng,
          title: 'new marker',
          draggable: true,
          map: map
        });

        console.log("added marker at " + marker.position);

      }



      //Can add more methods as well
      // this.anotherMethod = function(){}
      //Load the map and bus stops based on a keyword
      this.loadkeyWordMap = function(keyword) {

        console.log("In loadkeyWordMap");

        var lat;
        var long;

        switch (keyword) {
          case 'West Downtown':
            //Statements executed when the result of expression matches value2
            lat = '30.2718634';
            long = '-97.7564902';
            break;
          case 'Westgate':
            lat = '30.2249088';
            long = '-97.8065877';

            break;
          case 'The Domain':
            lat = '30.4020649';
            long = '-97.7280716';
            break;
          case 'Hutto':
            lat = '30.5391729';
            long = '-97.584807';

            break;
          case 'South Congress':
            lat = '30.249222';
            long = '-97.7517067';
            break;
          default:
            lat = '30.2746652';
            long = '-97.7425392';
            break;
        }
        initMap(lat, long, keyword);
      }
    };
  }
}())
