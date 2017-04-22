var myApp = angular.module('helloworld', ['ui.router']);

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

myApp.run(function ($uiRouter,initService) {
 // start app

 initService.doRequest().then(function(result) {
  
    console.log("myvar = ", result);
  });
 
});

/*myApp.controller('initController',function($uiRouter,initService){
  var myvar ="sss";
})*/
