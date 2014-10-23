var login = angular.module('app.packages-service',[]);

login.factory('PackagesService',function($http, CategoriesService){

  var service = {};
  var _packageList = {};

  service.getAllPackages = function() {
    $http({method:'GET',url:'index.php/api/v1/packages'})
      .success(function(data, status, header, config) {
        console.log(data);
        return data;
      })
      .error(function(data, status, header, config) {
        return false;
      });
  };

  service.getPackagesByCategory = function(category) {
    var options = {"where" : [
                                  {"category" : category}
                               ]
                  };
    $http({method:'GET',url:'index.php/api/v1/packages', params:options})
      .success(function(data, status, header, config) {
        console.log(data);
        return data;
      })
      .error(function(data, status, header, config) {
        return false;
      });

  };

  service.getPackageList = function() {
    return _packageList;
  };

  service.updatePackageList = function(category, market) {
    var categoryId = CategoriesService.getByCategoryName(category);
    console.log(categoryId);
    service.getPackagesByCategory(categoryId);
  };

  return service;
});