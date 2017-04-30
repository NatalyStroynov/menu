myApp.service('initService', function($http, $timeout){
    
  this.getDataMenu = function() {
    return $timeout(function() {
      return menuData[Object.keys(menuData)[0]].sub;
    }, 1000);
  };
/* this.getDataMenu = function() {
    return $http.get('data/menu.json').then(function(result){
      return result[Object.keys(obj)[0]];
    });
  };
 */
});