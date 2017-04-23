function setMenuState(name, url, data) {
  myApp.stateProvider.state(name, {
      url: url,
      controller: 'MenuItemController',
      template: `
=== menu ===
<ul>
  <li ng-repeat="item in menu">
    <a ui-sref="{{item.url}}">{{item.title}}</a>
  </li>
</ul>
      `,
      resolve: {
        data: function() {
          return data;
        }
      }
  });
}

function setScreenState(name, url, data) {
  myApp.stateProvider.state(name, {
      url: url,
      controller: 'ScreenItemController',
      template: `
=== screen ===
<div>
  {{screen.title}}
</div>
      `,
      resolve: {
        data: function() {
          return data;
        }
      }
  });
}