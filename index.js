var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  myApp.stateProvider = $stateProvider;
  $urlRouterProvider.otherwise('/');
});

myApp.run(function ($uiRouter, $state, initService, $rootScope) {
  initService.doRequest().then(function(result) {
    setMenuState('home', '/', { sub: result });
    $state.go('home');
  }); 
});