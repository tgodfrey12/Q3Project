(function() {
  'use strict';

  var map = null;
  var destinationMap = null;

  //register the service object ('notify').  This will need to be injected in all
  //parts of the app that will reference the map
  angular.module('myApp')
    .service('notify', notify)

  notify.$inject = ['$http']

  function notify($http) {
    this.onInit = function() {
      //Loads the current location for the initial map.  Too slow!!!
      // if ("geolocation" in navigator) {
      //   console.log('geolocation available');
      //   navigator.geolocation.getCurrentPosition(function(position) {
      //     initMap(position.coords.latitude, position.coords.longitude, "");
      //   });
      // } else {
      //   /* geolocation IS NOT available */
      //   alert('geolocation not available');
      // }

      //Because the above is too slow, load GAlvanize to start
      initMap('30.2655566', '-97.7518872', 'Galvanize')

      function initMap(latitude, longitude, initial) {

        console.log("In initMap");

        if (initial.length === 0) {
          var labels = ['You Are Here'];
        } else {
          var labels = ['Start at ' + initial];
        }

        let startLocation = {
          lat: parseFloat(latitude),
          lng: parseFloat(longitude)
        };

        //console.log('In initMap, startLocation = ' + JSON.stringify(startLocation));

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: startLocation
        });
        let marker = new google.maps.Marker({
          position: startLocation,
          label: labels[0],
          map: map,

        });

        //Commented out to add markers with google maps
        //addNearbyMarkers(map, latitude, longitude);

        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: startLocation,
          radius: 50000,
          keyword: 'bus_station'
        }, mapBusStops);

      } //End initMap


      function mapBusStops(places) {

        console.log("in mapBusStops");
        let markers = [];

        for (let i = 0, place; place = places[i]; i++) {
          var image = '../images/busstop.png';

          //console.log(place);

          let stopMarker = new google.maps.Marker({
            map: map,
            icon: image,
            title: place.name,
            //animation: google.maps.Animation.DROP,
            position: place.geometry.location
          });

          let infowindow = new google.maps.InfoWindow({
            content: place.name
          });


          markers.push(stopMarker);



        }

        markers.forEach(function(marker) {
          google.maps.event.addListener(marker, 'click', function() {
            console.log("In click event");
            map.setCenter(marker.getPosition());
            infowindow.open(map, marker);
          });

        })

      } //End mapBusStops




      //Get marker points based on lat/long values in the database
      function addNearbyMarkers(map, lat, long) {
        console.log("in addNearbyMarkers");

        $http({
          url: '/api/stops/search',
          method: "GET",
          params: {
            lat: lat,
            long: long
          }
        }).then(function(response) {
          console.log(response);
        })
      }

      this.loadkeyWordMap = function(keyword, lat, long) {
        initMap(lat, long, keyword);
        addNearbyMarkers(map, parseFloat(lat), parseFloat(long))
      }
    };
  }
}())
