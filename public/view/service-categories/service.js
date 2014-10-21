var login = angular.module('app.service-categories-services',[]);

login.factory('ServiceCategories',function($http){
  return{

    get : function() {
      var data = $http({method:'GET',url:'index.php/api/v1/service-categories'});
      return data;
    },

    getCategoryNames : function() {
      var columns = {"columns" : [
                                    {"0" : "name"}
                                  ]
                    };
      var data = $http({method:'GET',url:'index.php/api/v1/service-categories', params:columns});
      return data;
    }

  }
});