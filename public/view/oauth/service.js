var login = angular.module('app.oauth-service',[]);

login.factory('OauthService',function($http){

  var service = {};


  service.addToken = function(userId, tokenId) {
    var options = {"user_id" : userId, "token_id" : tokenId};

    var promise = $http({method:'POST',url:'index.php/api/v1/token/add-to-user', params:options});

    return promise;
  };

  service.getTokenByUserId = function(userId) {
    var promise = $http({method:'GET',url:'index.php/api/v1/token/get-by-user-id/'+userId});

    return promise;
  };


  return service;
});