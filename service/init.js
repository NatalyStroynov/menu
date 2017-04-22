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


});