(function() {
  var UserModule = angular.module('users', ['restangular']);


  UserModule.directive('userDropDown', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/users/users-drop-down-tile.html',
      controller: function($scope, Restangular) {
        var users = this;

        users.user_name = "Select User";

        users.data = [];

        Restangular.setBaseUrl('index.php/api/v1');

        var Users = Restangular.all('users');

        Users.getList().then(function(userJson) {

          users.data = userJson;
          console.log(users);

        });

        this.click = function (userId, userName) {
          $scope.userDD.user_name = userId;
        };

      },
      controllerAs: 'userDD'
    }
  });

  UserModule.directive('userDropDownInput', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/users/users-drop-down-input.html',
      controller: function($scope, Restangular) {
        var users = this;

        users.user_name = "Select User";
        users.user_id = "";

        users.data = [];

        Restangular.setBaseUrl('index.php/api/v1');

        var Users = Restangular.all('users');

        Users.getList().then(function(userJson) {

          users.data = userJson;
          console.log(users);

        });

        this.click = function (userId, userName) {
          $scope.userDD.user_name = userName;
          $scope.userDD.user_id = userId;
        };

        this.updateSelectedName = function(userId) {
          console.log('USERS =');
          console.log(users.data);
          users.user_id = userId;

          for ( var i = 0; i < users.data.length; i++ ) {
            if (users.data[i].user_id == userId) {
              users.user_name = users.data[i].name;
              return;
            }
          }
        }

      },
      controllerAs: 'userDD'
    }
  });



})();