var login = angular.module('app.service-categories-services',[]);

login.factory('CategoriesService',function($http){

  var service = {};
  var _selectedCategory = "Select Category";

  service.get = function() {
    var data = $http({method:'GET',url:'index.php/api/v1/service-categories'});
    return data;
  };

  service.getCategoryNames = function() {
    var columns = {"columns" : [
                                  {"0" : "name"}
                                ]
                  };
    var data = $http({method:'GET',url:'index.php/api/v1/service-categories', params:columns});
    return data;
  };

  service.getSelctedCategory = function() {
    return _selectedCategory;
  };

  service.getByCategoryName_Promise = function(categoryName) {
    //console.log('HERE');
    //console.log(categoryName);
    var promise = $http({method:'GET',url:'index.php/api/v1/service-categories/' + categoryName});

    return promise;
  };

  service.setSelectedCategory = function(selectNew) {
    _selectedCategory = selectNew;
    service.newCategorySelected();
  };

  service.newCategorySelected = function(){/*overridable action*/}

  return service;
});