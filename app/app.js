'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('menuComponent', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});

myApp.service('initService',function(){
  this.getData = function($http){
    return $http.get('data/menu.json', { cache: true }).then(function(resp) {
      return resp.data;
    });
  }
});

myApp.run(function ($uiRouter,initService) {
  // start app

  initService.getData().then(function(result) {

    console.log("myvar = ", result);
  });

});