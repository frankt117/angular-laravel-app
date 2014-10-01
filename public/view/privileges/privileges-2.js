(function() {
  var PrivilegeModule = angular.module('privileges', ['restangular', 'ngMaterial']);

  PrivilegeModule.directive('privilegeModule', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/privileges/module-3.html',
      controller: function($scope, Restangular, $http) {
        var privilegesController = this;

        privilegesController.privileges = {};
        privilegesController.types = {};

        $http({
          method: "GET",
          url: "index.php/api/v1/privileges/",
          headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
          data: { }
        }).then(function($response) {
            console.log($response);
        });

      },
      controllerAs: 'main'
    }
  });

  PrivilegeModule.directive('userDropDown2', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/users/users-drop-down-tile.html',
      controller: function($scope, Restangular) {
        var users = this;
        users.user_name = "Select a User";

        users.data = [];

        Restangular.setBaseUrl('index.php/api/v1');

        var Users = Restangular.all('users');

        Users.getList().then(function(userJson) {

          users.data = userJson;

        });

        this.click = function(userId, userName) {
          $scope.main.updatePrivileges(userId);
          users.user_name = userName;
        };
      },
      controllerAs: 'userDD'
    }
  });

})();