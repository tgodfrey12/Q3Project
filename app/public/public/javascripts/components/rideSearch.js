(function() {
  'use strict';

  angular.module('myApp')
    .component('rideSearch', {
      controller: controller,
      template: `

        <!--A map div-->
        <H3>Where are you leaving from?</H3>
        <div class="map" id="map"></div>

        <!--div class="toSearchOptions">

          <div class="radioButtons">
            <div class="alert alert-info">
                <div class="form">
                    <label class="control-label">Search Options</label>
                      <label class="radio">
                          <input value="1" name="fromRadio" type="radio" ng-checked="checked" ng-model="location" value="Current Location">Current Location
                      </label>
                      <label class="radio">
                          <input value="2" name="fromRadio" type="radio" ng-checked="landmark" ng-model="landmark">Keyword/Landmark
                      </label>
                      <label class="radio">
                          <input value="3" name="fromRadio" type="radio" ng-checked="address" ng-model="address">Specify Address
                      </label>
                </div>
            </div>
        </div>
      </div-->

        <div class="searchArea">
          <div class="row">
            <div class="col-lg-6">
              <!--div class="input-group">
                <input type="text" class="form-control" placeholder="Search for address">
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">Go!</button>
                </span>
              </div-->





              <li class="dropdown" ng-init="$ctrl.area='West Downtown'; sortName='Votes'">
                 <a href="#"
                   class="dropdown-toggle"
                   data-toggle="dropdown"
                   role="button"
                   aria-haspopup="true"
                   aria-expanded="false">Select a landmark to depart from<span class="caret"></span></a>
                 <ul class="dropdown-menu">
                   <li><a ng-click="$ctrl.area='West Downtown'; $ctrl.departlandmarkSelect();">West Downtown</a></li>
                   <li><a ng-click="$ctrl.area='Westgate'; $ctrl.departlandmarkSelect();">Westgate</a></li>
                   <li><a ng-click="$ctrl.area='The Domain'; $ctrl.departlandmarkSelect();">The Domain</a></li>
                   <li><a ng-click="$ctrl.area='South Congress'; $ctrl.departlandmarkSelect();">South Congress</a></li>
                 </ul>
               </li>





                <div class="btn-group"> <a class="btn btn-default dropdown-toggle btn-select" data-toggle="dropdown" href="#" id="btnCountry">Departure Time<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">12:00</a></li>
                        <li><a href="#">1:00</a></li>
                        <li><a href="#">2:00</a></li>
                        <li><a href="#">3:00</a></li>
                        <li><a href="#">4:00</a></li>
                        <li><a href="#">5:00</a></li>
                        <li><a href="#">6:00</a></li>
                        <li><a href="#">7:00</a></li>
                        <li><a href="#">8:00</a></li>
                        <li><a href="#">9:00</a></li>
                        <li><a href="#">10:00</a></li>
                        <li><a href="#">11:00</a></li>
                    </ul>


                <div class="btn-group"> <a class="btn btn-default dropdown-toggle btn-select" data-toggle="dropdown" href="#" id="btnCountry">Arrival Time<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">12:00</a></li>
                        <li><a href="#">1:00</a></li>
                        <li><a href="#">2:00</a></li>
                        <li><a href="#">3:00</a></li>
                        <li><a href="#">4:00</a></li>
                        <li><a href="#">5:00</a></li>
                        <li><a href="#">6:00</a></li>
                        <li><a href="#">7:00</a></li>
                        <li><a href="#">8:00</a></li>
                        <li><a href="#">9:00</a></li>
                        <li><a href="#">10:00</a></li>
                        <li><a href="#">11:00</a></li>
                    </ul>
                </div>

                <div class="btn-group"> <a class="btn btn-default dropdown-toggle btn-select" data-toggle="dropdown" href="#" id="btnCountry">AM/PM<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">AM</a></li>
                        <li><a href="#">PM</a></li>
                    </ul>
                </div>

              </div>
            </div> <!--End From Search Options div-->
            </div><!-- /.col-lg-6 -->
          </div><!-- /.row -->
        </div>




        <!--div class="SearchResults">
          <ul ng-repeat="stop in $ctrl.stops">

            <div class="row">
                <div class="col-md-12">
                  <p>
                    {{stop.stop_id}}
                  </p>
                  <p>
                    {{stop.stop_name}}
                  </p>
                  <p>
                    {{stop.stop_lat}}
                  </p>
                  <p>
                    {{stop.stop_lon}}
                  </p>
                </div>
            </div>
          </ul>
        </div-->



  `
    })

  controller.$inject = ['$http', 'notify']

  function controller($http, notify) {
    //console.log('this is the controller for the rideSearch component');
    const vm = this;



    vm.$onInit = function() {
      //console.log("api stops loading...");


      //Get all the stops
      $http.get('/api/stops/').then(function(response) {
        vm.stops = response.data;
        vm.showComments = false;
        //console.log(vm.stops);
      })
    }





    vm.departlandmarkSelect = function() {
      //console.log("vm.area = " + vm.area);
      let lat = '';
      let long = '';


      switch (vm.area) {
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


      //console.log('about to call lat and long route');
      //get the lat/longs for the nearby markers
      $http.get('/api/stops/${lat}/${long}').then(function(response) {
        console.log('calling lat and long route');

        // vm.stops = response.data;
        // vm.showComments = false;
        //console.log(vm.stops);
      })



      notify.loadkeyWordMap(vm.area, lat, long);

      //console.log("lat = " + notify.lat);

    }







    //Call methods from within the notify service in mapModule.js
    notify.onInit();

  } //end controller

}());
