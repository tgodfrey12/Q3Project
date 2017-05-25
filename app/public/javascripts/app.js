(function() {
  angular.module('myApp', ['ui.router'])
    .config(config)

  config.$inject = ["$stateProvider", "$urlServiceProvider"]

  function config($stateProvider, $urlServiceProvider) {
    // make your app start at state 'ride-search'
    $urlServiceProvider.rules.otherwise('/');
    $stateProvider
      .state('ride-search', {
        url: '/',
        template: `

          <h1>ride-search state<h1>

        `
        //component: 'rideSearch'
      })
  }

})()
