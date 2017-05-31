(function() {
  'use strict';

  angular.module('myApp')
    .component('rideSearch', {
      controller: controller,
      template: `


        Here is the template
        <div class="SearchResults">
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
        </div>

          <h4>Where are you coming from?</h4>
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
      </div>


        <div class="searchArea">
          <div class="row">
            <div class="col-lg-6">
              <div class="input-group"  ng-show="address">
                <input type="text" class="form-control" placeholder="Search for address">
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">Go!</button>
                </span>
              </div><!-- /input-group -->



              <div class="btn-group" ng-show="landmark"> <a class="btn btn-default dropdown-toggle btn-select" data-toggle="dropdown" href="#" id="btnCountry">Select an Austin Landmark <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                      <li><a href="#">East Downtown</a></li>
                      <li><a href="#">West Downtown</a></li>
                      <li><a href="#">Westgate</a></li>
                      <li><a href="#">The Domain</a></li>
                      <li><a href="#">South Congress</a></li>
                      <li><a href="#">Round Rock</a></li>
                      <li><a href="#">Hutto</a></li>
                  </ul>
              </div>




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


            </div><!-- /.col-lg-6 -->
          </div><!-- /.row -->
        </div>





        <!--A map div-->
        <div id="map"></div>






  `
    })



  controller.$inject = ['$http', 'notify']

  function controller($http, notify) {
    console.log('this is the controller for the rideSearch component');
    const vm = this;

    vm.$onInit = function() {
      console.log("api stops loading...");

      //Get all the posts
      $http.get('/api/stops/').then(function(response) {
        vm.stops = response.data;
        vm.showComments = false;
        //console.log(vm.stops);
      })
    }

    //Call methods from within the notify service in mapModule.js
    notify.onInit();

    //



  } //end controller

}());
