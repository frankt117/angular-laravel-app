var login = angular.module('app.trims-service',[]);

login.factory('TrimsService',function($http){

  var service = {};


  service.getAllTrims = function() {
    var promise = $http({method:'GET',url:'index.php/api/v1/trims'})

    return promise;
  };

  service.getAllByPackageId = function(packageId) {
    var options = {"where" : [
      {"package_id" : packageId}
    ]
    };
    var promise = $http({method:'GET',url:'index.php/api/v1/trims', params:options});

    return promise;
  };

  service.createTrim = function(trimObj) {
    var promise = $http({method:'POST',url:'index.php/api/v1/trims',params:trimObj});

    return promise;
  };

  service.deleteTrimById = function(trimId) {
    var promise = $http({method:'DELETE',url:'index.php/api/v1/trims/'+trimId});

    return promise;
  };


  service.updateTrimTable = function(packageId) {/*overridable action*/};

  return service;
});