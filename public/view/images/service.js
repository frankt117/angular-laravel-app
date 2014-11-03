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
    var promise = $http({method:'GET',url:'index.php/api/v1/images'})

    return promise;
  };

  service.getImagesByPackageId = function(packageId) {
    var options = {"where" : [
      {"package_id" : packageId}
    ]
    };
    var promise = $http({method:'GET',url:'index.php/api/v1/images', params:options});

    return promise;
  };




  service.updateImageList = function(packageId) {/* overridable action*/};
  service.imageUploaded = function(image) {/* overridable action*/};

  return service;
});