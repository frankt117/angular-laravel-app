(function() {
  var PrivilegeModule = angular.module('privileges', ['restangular']);

  PrivilegeModule.directive('privilegeModule', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/privileges/module-3.html',
      controller: function($scope, Restangular, $http) {
        var privilegesController = this;

        privilegesController.privileges = {};
        privilegesController.privilegeModules = {};
        privilegesController.types = {};

        $http({
          method: "GET",
          url: "index.php/api/v1/modules/",
          headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
          data: { }
        }).then(function($response) {
          privilegesController.privilegeModules = $response.data;
          console.log($scope);
        });

        privilegesController.onTabSelected = function(module) {
          console.log('SELECTED');
        };

        privilegesController.updatePrivileges = function(userId) {
          console.log("HERE");
          console.log(userId);
        };

      },
      controllerAs: 'privilegesController'
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
          console.log(userJson);
          users.data = userJson;

        });

        this.click = function(userId, userName) {
          $scope.privilegesController.updatePrivileges(userId);
          users.user_name = userName;
        };
      },
      controllerAs: 'userDD'
    }
  });

})();