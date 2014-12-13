var login = angular.module('app.packages-service',['app.images-service']);

login.factory('PackagesService',function($http, CategoriesService, ImagesService){

  var service = {};
  var _packageList = {};

  service.setPackageList = function(newList) {
    _packageList = newList;
  };

  service.getPackageList = function() {
    return _packageList;
  };

  service.setImagesForPackageListById = function(packageId, images) {
    for (var i = 0; i < _packageList.length; i ++) {
      if (_packageList[i].id == packageId) {
        _packageList[i].images = images;
      }
    }
  };

  service.setHeadLineImageForPackageListById = function(packageId, images) {
    for (var i = 0; i < _packageList.length; i ++) {
      if (_packageList[i].id == packageId) {
        _packageList[i].headImage = images[0];
      }
    }
  };

  service.setPackageListImages = function() {
    function setImages(packageId) {
      var id = packageId;

      ImagesService.getImagesByPackageId(_packageList[i].id)
        .success(function(data, status) {
          service.setHeadLineImageForPackageListById(id, data);
        })
        .error(function(data, status) {

        });
    }

    for (var i = 0; i < _packageList.length; i++) {
      setImages(_packageList[i].id);
    }

    console.log("PACKAGE WITH IMAGES");
    console.log(service.getPackageList());
  }

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

  service.getPackagesByCategoryAndUserId = function(category, userId) {
    var options = {"where" : [
                                {"category_id" : category, "user_id" : userId}
                             ]
    };
    var promise = $http({method:'GET',url:'index.php/api/v1/packages', params:options});

    return promise;
  };

  service.getPackageById = function(packageId) {
    var promise = $http({method:'GET',url:'index.php/api/v1/packages/show'});

    return promise;
  };



  service.createPackage = function(packageObj) {
    var promise = $http({method:'POST',url:'index.php/api/v1/packages',params:packageObj});

    return promise;
  };



  service.updatePackageList = function(category, market) {/* overridable action*/};
  service.packageClicked = function(packageObj) {/*overridable action*/};

  return service;
});