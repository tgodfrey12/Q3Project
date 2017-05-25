(function() {
  'use strict';

  angular.module('myApp')
    .component('rideSearch', {
      controller: controller,
      template: `


        Here is the template


  `
    })



  controller.$inject = ['$http']

  function controller($http) {
    console.log('this is the controller for the rideSearch component');

    vm.$onInit = function() {
      //Get all the posts
      $http.get('/api/stops/').then(function(response) {
        vm.posts = response.data;
        vm.showComments = false;
        console.log(vm.posts);
      })
    }


  } //end controller

}());
