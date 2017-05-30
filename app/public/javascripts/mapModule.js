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
          initMap(position.coords.latitude, position.coords.longitude);
        });
      } else {
        /* geolocation IS NOT available */
        alert('geolocation not available');
      }


      function initMap(latitude, longitude) {
        var labels = ['You Are Here'];


        var startLocation = {
          lat: parseFloat(latitude),
          lng: parseFloat(longitude)
        };

        console.log('startLocation = ' + JSON.stringify(startLocation));

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: startLocation
        });
        var marker = new google.maps.Marker({
          position: startLocation,
          label: labels[0],
          map: map,

        });
      } //End initMap


    };

    //Can add more methods as well
    // this.anotherMethod = function(){}

  }


}())
