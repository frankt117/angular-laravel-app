var login = angular.module('app.packages-service',[]);

login.factory('PackagesService',function($http){

  var service = {};

  service.get = function() {
    var data = $http({method:'GET',url:'index.php/api/v1/packages'});
    return data;
  };

  return service;
});