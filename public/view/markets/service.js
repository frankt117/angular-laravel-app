var login = angular.module('app.markets-service',[]);

login.factory('MarketsService',function($http){

  var service = {};
  var _selectedMarket = 'Select Market From Service';


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
    console.log(selectNew);
    _selectedMarket = selectNew;
    service.newMarketSelected();
  };

  service.logSelectedMarket = function() {
    console.log(_selectedMarket);
  };

  service.newMarketSelected = function() {
    //override in controller
  };

  return service;
});