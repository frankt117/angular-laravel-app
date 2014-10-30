var login = angular.module('app.images-service',[]);

login.factory('ImagesService',function($http){

  var service = {};
  var _imageList = {};

  service.setImageList = function(newList) {
    _imageList = newList;
  };

  service.getImageList = function() {
    return _imageList;
  };

  service.getAllImages = function() {
    $http({method:'GET',url:'index.php/api/v1/images'})
      .success(function(data, status, header, config) {
        return data;
      })
      .error(function(data, status, header, config) {
        return false;
      });
  };

  service.getImagesByPackageId = function(packageId) {
    var options = {"where" : [
      {"package_id" : packageId}
    ]
    };
    var promise = $http({method:'GET',url:'index.php/api/v1/images', params:options});

    return promise;
  };




  service.updateImageList = function(category, market) {/* overridable action*/};

  return service;
});