var login = angular.module('app.packages-service',[]);

login.factory('PackagesService',function($http, CategoriesService){

  var service = {};
  var _packageList = {};

  service.setPackageList = function(newList) {
    _packageList = newList;
  };

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
                                  {"category_id" : category}
                             ]
                  };
    var promise = $http({method:'GET',url:'index.php/api/v1/packages', params:options});

    return promise;
  };

  service.getPackageList = function() {
    return _packageList;
  };

  service.createPackage = function(packageObj) {
    var promise = $http({method:'POST',url:'index.php/api/v1/packages',params:packageObj});

    return promise;
  };



  service.updatePackageList = function(category, market) {/* overridable action*/};
  service.packageListClicked = function(packageObj) {/*overridable action*/};

  return service;
});