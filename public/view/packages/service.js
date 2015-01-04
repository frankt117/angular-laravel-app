var login = angular.module('app.packages-service',['app.images-service', 'app.trims-service']);

login.factory('PackagesService',function($http, CategoriesService, ImagesService, TrimsService){

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

      ImagesService.getImagesByPackageId(id)
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

  service.setHeadLineTrimForPackageListById = function(packageId, trims) {
    for (var i = 0; i < _packageList.length; i ++) {
      if (_packageList[i].id == packageId) {
        _packageList[i].headTrim = trims[0];
      }
    }
  };


  service.setPackageListTrims = function() {
    function setTrims(packageId) {
      var id = packageId;

      TrimsService.getAllByPackageId(id)
        .success(function(data, status) {
          service.setHeadLineTrimForPackageListById(id, data);
        })
        .error(function(data, status) {

        });
    }

    for (var i = 0; i < _packageList.length; i++) {
      setTrims(_packageList[i].id);
    }

    console.log("PACKAGE WITH TRIMS");
    console.log(service.getPackageList());
  }

  service.getAllPackages = function() {
    var promise = $http({method:'GET',url:'index.php/api/v1/packages'});

    return promise;
  };

  service.getPackagesByCategory = function(category) {
    var options = {"where" : [
                                  {"category_id" : category}
                             ]
                  };
    var promise = $http({method:'GET',url:'index.php/api/v1/packages', params:options});

    return promise;
  };

  service.getPackagesByCode = function(code) {
    var options = {"where" : [
      {"code" : code}
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
    var promise = $http({method:'GET',url:'index.php/api/v1/packages/'+packageId});

    return promise;
  };



  service.createPackage = function(packageObj) {
    var promise = $http({method:'POST',url:'index.php/api/v1/packages',params:packageObj});

    return promise;
  };



  service.updatePackageList = function(category, market) {/* overridable action*/ console.log("DEFAULT LOGIC CALLED")};
  service.packageClicked = function(packageObj) {/*overridable action*/};

  return service;
});