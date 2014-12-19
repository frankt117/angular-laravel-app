var login = angular.module('app.negotiations-service',[]);

login.factory('NegotiationsService',function($http){

  var service = {};


  service.getAll = function() {
    var promise = $http({method:'GET',url:'index.php/api/v1/negotiations'})

    return promise;
  };

  service.getSingleById = function(negotiationId) {
    var promise = $http({method:'GET',url:'index.php/api/v1/negotiations/'+negotiationId});

    return promise;
  };

  service.createNegotiation = function(negotiationObj) {
    var promise = $http({method:'POST',url:'index.php/api/v1/negotiations',params:negotiationObj});

    return promise;
  };


  return service;
});