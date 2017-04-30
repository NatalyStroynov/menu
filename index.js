var myApp = angular.module('menuComponent', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  myApp.stateProvider = $stateProvider;
 // $urlRouterProvider.otherwise('/');
});


myApp.run(function ($uiRouter,$state, initService, $rootScope,$location) {
   initService.getDataMenu().then(function(result) {
    console.log($location.path().split('/'));
     if($location.path() !== '/'){
       var urlStatesArray = $location.path().split('/');
       var urlStatesArrayLength = urlStatesArray.length;
       var resultStateChildren = result;
       var resultStateTitle;
       angular.forEach(urlStatesArray, function(value, key) {
         // console.log(key + "/" + value);
         if(value !== "") {
           resultStateChildren = resultStateChildren[value].sub;
           resultStateTitle = resultStateChildren[value].title;
           //console.log(resultState['"'+value+'"']);
         }
       });
       console.log(resultState);
       console.log(resultStateParent);
       setMenuState(resultStateTitle, '/', { sub: resultStateChildren });
       $state.go(resultStateTitle);

     }else{
       setMenuState('home', '/', { sub: result });
       $state.go('home');
     }



  }); 
});