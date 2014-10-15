var login = angular.module('AuthSrvc',[]);

login.factory('Login',function($http){
  return{
    auth:function(credentials){
      var authUser = $http({method:'POST',url:'index.php/api/v1/login/auth',params:credentials});
      return authUser;
    }
  }
});