(function() {
  var UserModule = angular.module('users', ['restangular']);


  UserModule.directive('userDropDown', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/users/users-drop-down-tile.html',
      controller: function($scope, Restangular) {
        var users = this;

        users.data = [];

        Restangular.setBaseUrl('index.php/api/v1');

        var Users = Restangular.all('users');

        Users.getList().then(function(userJson) {

          users.data = userJson;
          console.log(users);

        });
      },
      controllerAs: 'userDD'
    }
  });



})();