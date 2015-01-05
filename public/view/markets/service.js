var login = angular.module('app.markets-service',[]);

login.factory('MarketsService',["$http", function($http){

  var service = {};
  var _selectedMarket = 'Dallas/Fort Worth Area';


  service.get = function() {
    var data = $http({method:'GET',url:'index.php/api/v1/markets'});
    return data;
  };

  service.getCategoryNames = function() {
    var columns = {"columns" : [
                                  {"0" : "name"}
                               ]
                  };
    var data = $http({method:'GET',url:'index.php/api/v1/markets', params:columns});
    return data;
  };

  service.getSelectedMarket = function() {
    return _selectedMarket;
  };

  service.setSelectedMarket = function(selectNew) {
    _selectedMarket = selectNew;
    service.newMarketSelected();
  };

  service.newMarketSelected = function() {
    //override in controller
  };

  return service;
}]);