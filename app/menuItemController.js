myApp.controller('MenuItemController', function($scope, $state, $rootScope, data){
  $scope.menu = [];


    if (data && data.sub) {
      for (var prop in data.sub) {
        if (data.sub.hasOwnProperty(prop)) {

          var item = data.sub[prop];
          var name = item.url;
          var url = $state.current.url + ($state.current.url !== '/' ? '/' : '') + item.url;
          console.log($state.get(name));
          console.log($state.is(name));
          console.log($state.$current.name);
          if (!$state.get(item.url)) {
            if (item.type === 'menu') {
              setMenuState(name, url, item);


            }
            else if (item.type === 'screen' && !$state.is(name)) {
              setScreenState(name, url, item);
            }
          }
          console.log($state.is(name));
          $scope.menu.push(item);

        }
      }
    }
});