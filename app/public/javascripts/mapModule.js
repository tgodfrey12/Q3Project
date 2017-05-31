(function() {
  'use strict';

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

        console.log('In initMap, startLocation = ' + JSON.stringify(startLocation));

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: startLocation
        });
        var marker = new google.maps.Marker({
          position: startLocation,
          label: labels[0],
          map: map,

        });

        addNearbyMarkers(map, latitude, longitude);
      } //End initMap




      function addNearbyMarkers(map, lat, long) {

        console.log("inside addNearbyMarkers with lat " + lat);
        console.log("inside addNearbyMarkers with long " + long);

        // var latlng = new google.maps.LatLng(lat, long);
        //
        // console.log("inside addNearbyMarkers with latLong" + latlng);
        //
        // var marker = new google.maps.Marker({
        //   position: latlng,
        //   title: 'new marker',
        //   draggable: true,
        //   map: map
        // });


        //Get $http undefined
        // $http.get('/api/stops/search' + '/' + lat).then(function(response) {
        //   console.log(response);
        // })

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

        console.log("In loadkeyWordMap and lat = " + lat + " and long = " + long);

        initMap(lat, long, keyword);
        addNearbyMarkers(map, parseFloat(lat), parseFloat(long))
      }









    };
  }
}())
