var login = angular.module('app.negotiations-service',[]);

login.factory('NegotiationsService',["$http", function($http){

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

  service.getNegotiationsByInitialId = function(initialId) {
    var options = {"where" : [
      {"initial_id" : initialId}
    ]
    };
    var promise = $http({method:'GET',url:'index.php/api/v1/negotiations', params:options});

    return promise;
  };

  service.getNegotiationsByRespondEmail = function(emailId) {
    var options = {"where" : [
      {"respond_to_email_id" : emailId}
    ]
    };
    var promise = $http({method:'GET',url:'index.php/api/v1/negotiations', params:options});

    return promise;
  };

  service.getNegotiationsByTargetEmail = function(emailId) {
    var options = {"where" : [
      {"target_to_email_id" : emailId}
    ]
    };
    var promise = $http({method:'GET',url:'index.php/api/v1/negotiations', params:options});

    return promise;
  };


  return service;
}]);