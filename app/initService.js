myApp.service('initService', function($timeout){
    
  this.doRequest = function() {
    return $timeout(function() {
      return menuData;
    }, 1000);
  };

});