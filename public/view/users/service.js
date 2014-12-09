var login = angular.module('app.users-service',[]);

login.factory('UsersService',function($http){

  var service = {};


  service.getAllUsers = function() {
    var promise = $http({method:'GET',url:'index.php/api/v1/users'})

    return promise;
  };

  service.createNewUserCustomer = function(userObj) {
    var promise = $http({method:'POST',url:'index.php/api/v1/users-customer',params:userObj});

    return promise;
  };




  service.userDropDownClickedAction = function (userId) {/* overridable action */};


  return service;
});