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


  return service;
});