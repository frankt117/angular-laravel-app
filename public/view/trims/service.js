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


  service.updateTrimTable = function(packageId) {/*overridable action*/};

  return service;
});