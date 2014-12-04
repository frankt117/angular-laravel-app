var login = angular.module('app.images-service',[]);

login.factory('ImagesService',function($http){

  var service = {};
  service._imageList = {'length' : 0};

  service.setImageList = function(newList) {
    service._imageList = newList;
    //this._imageList = newList;
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

  service.createImage = function(imageObj) {
    var promise = $http({method:'POST',url:'index.php/api/v1/images',params:imageObj});

    return promise;
  };




  service.updateImageList = function(packageId) {/* overridable action*/};
  service.imageUploaded = function(image) {/* overridable action*/};
  service.isImageListPopulated = function() {/* overridable action*/ return false;};
  service.deleteImageFromUpdateList = function(packageId) {/* overridable action*/};

  return service;
});