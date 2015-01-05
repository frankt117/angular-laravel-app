var login = angular.module('app.companies-service',[]);

login.factory('CompaniesService',["$http", function($http){

  var service = {};


  service.getAll = function() {
    var promise = $http({method:'GET',url:'index.php/api/v1/companies'})

    return promise;
  };

  service.getAllByPrimaryUserId = function(primaryUserId) {
    var options = {"where" : [
      {"primary_user_id" : primaryUserId}
    ]
    };
    var promise = $http({method:'GET',url:'index.php/api/v1/companies', params:options});

    return promise;
  };



  return service;
}]);