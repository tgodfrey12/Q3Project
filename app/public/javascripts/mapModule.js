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

      //Can add more methods as well
      // this.anotherMethod = function(){}
      this.loadkeyWordMap = function(keyword) {

        var lat;
        var long;

        switch (keyword) {
          case 'East Downtown':
            //Statements executed when the result of expression matches value1
            lat = '30.2718634';
            long = '-97.7564902';

            break;
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
          default:
            lat = '30.2746652';
            long = '-97.7425392';
            break;
        }

      }



    };


  }



}())
