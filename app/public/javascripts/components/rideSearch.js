(function() {
  'use strict';

  angular.module('myApp')
    .component('rideSearch', {
      controller: controller,
      template: `

      <p>
        Here is the template
      </p>

        <div class="buttons">
          <button type="submit" class="btn btn-primary" ng-click="$ctrl.createPost($ctrl.post)">
              Create Post
            </button>
        </div>
  `
    })



  controller.$inject = ['$http']

  function controller($http) {

  } //end controller

}());
