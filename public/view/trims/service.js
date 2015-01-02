var login = angular.module('app.trims-service',['app.companies-service']);

login.factory('TrimsService',function($http, $q, CompaniesService){

  var service = {};
  service.tableTrims = [];


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


  //service.updateTrimTable = function(packageId) {/*overridable action*/};
  service.getTableTrims = function() {
    return service.tableTrims;
  };

  service.updateTrimServiceProvider = function(userId, serviceProvider) {
    for(var i = 0; i < service.tableTrims.length; i++) {
      if(service.tableTrims[i].user_id == userId) {
        service.tableTrims[i].service_provider = serviceProvider.name;
        service.tableTrims[i].company_id = serviceProvider.id;
      }
    }
  };

  service.updateTrimTable = function($packageId) {
    var deferred = $q.defer();

    console.log('UPDATING TRIM TABLE');
    service.getAllByPackageId($packageId)
      .success(function(data) {
        service.tableTrims = data;

        var trimsData = data;

        for(var i = 0; i < trimsData.length; i++) {
          CompaniesService.getAllByPrimaryUserId(trimsData[i].user_id)
            .success(function(data) {
              service.updateTrimServiceProvider(data[0].primary_user_id, data[0]);
            });
        }

        if(service.getTableTrims()) {
          deferred.resolve('TRIMS UPDATED');
        } else {
          deferred.reject('TRIMS FAILED');
        }
      });

    return deferred.promise;
  };




  return service;
});