var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  myApp.stateProvider = $stateProvider;
  $urlRouterProvider.otherwise('/');
});

myApp.run(function ($location, $state, initService, $rootScope) {
  var path = $location.path();
  initService.doRequest().then(function(result) {
    setMenuState('home', '/', { sub: result });
    $state.go('home');
  }); 
});