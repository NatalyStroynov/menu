myApp.service('initService', function($timeout){
var myJson ={
  sitemap: {
    "ICM000": {
		"url": "ICM000",
		"type": "menu",
		"title": "מהדורה 17.4",
		"order": "1"
	  }
  }
};

    
this.doRequest = function() {
  return $timeout(function() {
    return myJson;
  }, 1000);
};

var service = {
getAllPeople: function() {
return $http.get('data/menu.json', { cache: true }).then(function(resp) {
return resp.data['ICM000'].sub;
});
},
getPerson: function(id) {
  function personMatchesParam(person) {
    return person.id === id;
  }

  return service.getAllPeople().then(function (people) {
    return people.find(personMatchesParam)
  });
}
}
return service;

});