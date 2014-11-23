var login = angular.module('app.oauth-service',[]);

login.factory('OauthService',function($http){

  var service = {};


  service.getAccessToken = function() {
    var promise = $http({method:'GET',url:'index.php/api/v1/oauth/token'})

    return promise;
  };


  return service;
});