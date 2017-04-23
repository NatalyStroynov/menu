myApp.controller('MenuItemController', function($uiRouter, $scope, $state, $rootScope, data){
  $scope.menu = [];

  if(data && data.sub) {
    for (var prop in data.sub) {
      if (data.sub.hasOwnProperty(prop)) {
        var item = data.sub[prop];
        var name = item.url;
        var url = $state.current.url + ($state.current.url !== '/' ? '/' : '') + item.url;
        if(item.type === 'menu') {
          setMenuState(name, url, item);
        }
        else if(item.type === 'screen') {
          setScreenState(name, url, item);
        }
        $scope.menu.push(item);
      }
    }
  }

});