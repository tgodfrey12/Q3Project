angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TypeaheadCtrl', function($scope, $http) {

  var _selected;

  $scope.selected = undefined;
  $scope.keywords = ['Domain', 'Capitol', 'Triangle', 'UT Campus', 'Round Rock', 'Leander', 'Manor', 'South Congress', 'Westgate', 'Manchaca', 'Alandale'];
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getLocation = function(val) {
    return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response) {
      return response.data.results.map(function(item) {
        return item.formatted_address;
      });
    });
  };

  $scope.ngModelOptionsSelected = function(value) {
    if (arguments.length) {
      _selected = value;
    } else {
      return _selected;
    }
  };

  $scope.modelOptions = {
    debounce: {
      default: 500,
      blur: 250
    },
    getterSetter: true
  };
});

//Initialize the map using the lat/long of the map and the type of map
//Then create and draw the map
function initMap(mapType, lattitude, longitude) {

  $('#places').empty();

  var mapCenter = {
    lat: lattitude,
    lng: longitude
  };

  if (mapType === "brewery") {
    $('#breweryButton').addClass('active');
  }

  map = new google.maps.Map(document.getElementById('map'), {
    center: mapCenter,
    zoom: 17
  });

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: mapCenter,
    radius: 50000,
    keyword: mapType
  }, processResults);
}
