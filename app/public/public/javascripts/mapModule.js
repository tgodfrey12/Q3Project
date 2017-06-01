(function() {
  'use strict';

  var map = null;

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
        if (initial.length === 0) {
          var labels = ['You Are Here'];
        } else {
          var labels = ['Start at ' + initial];
        }

        var startLocation = {
          lat: parseFloat(latitude),
          lng: parseFloat(longitude)
        };

        //console.log('In initMap, startLocation = ' + JSON.stringify(startLocation));

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: startLocation
        });
        var marker = new google.maps.Marker({
          position: startLocation,
          label: labels[0],
          map: map,

        });




        //Commented out to add markers with google maps
        //addNearbyMarkers(map, latitude, longitude);


        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: startLocation,
          radius: 250,
          keyword: 'bus_station'
        }, mapBusStops);

      } //End initMap



      function mapBusStops(places) {

        for (let i = 0, place; place = places[i]; i++) {
          var image = '../images/busstop.png';

          //console.log(place);
          //console.log(place.geometry.location);

          var marker = new google.maps.Marker({
            map: map,
            icon: image,
            title: place.name,
            //animation: google.maps.Animation.DROP,
            position: place.geometry.location
          });
        }
        //map.fitBounds(bounds);
      } //End processResults



      //Get marker points based on lat/long values in the database
      function addNearbyMarkers(map, lat, long) {

        // console.log("inside addNearbyMarkers with rounded lat " + latFloat.toFixed(3));
        // console.log("inside addNearbyMarkers with rounded lat " + longFloat.toFixed(3));

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

        //Can't see the stops object
        //console.log("inside addNearbyMarkers " + this.stops);

      }

      //Can add more methods as well
      // this.anotherMethod = function(){}
      //Load the map and bus stops based on a keyword
      this.loadkeyWordMap = function(keyword, lat, long) {

        //console.log("In loadkeyWordMap and lat = " + lat + " and long = " + long);

        initMap(lat, long, keyword);
        addNearbyMarkers(map, parseFloat(lat), parseFloat(long))
      }

    };
  }
}())
