var login = angular.module('app.markets-service',[]);

login.factory('MarketsService',function($http){
  return{

    get : function() {
      var data = $http({method:'GET',url:'index.php/api/v1/markets'});
      return data;
    },

    getCategoryNames : function() {
      var columns = {"columns" : [
        {"0" : "name"}
      ]
      };
      var data = $http({method:'GET',url:'index.php/api/v1/markets', params:columns});
      return data;
    }

  }
});