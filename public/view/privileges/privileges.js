(function() {
  var PrivilegeModule = angular.module('privileges', ['restangular']);

  PrivilegeModule.directive('privilegeModule', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/privileges/module.html',
      controller: function($scope, Restangular, $http) {

        var main = this;

        main.privileges = {};
        main.checkedPrivileges = {};
        main.userId = 0;

        Restangular.setBaseUrl('index.php/api/v1');

        var Privileges = Restangular.all('privileges');

        Privileges.getList().then(function(privilegesJson) {
          main.privileges = privilegesJson;
        });


        this.updatePrivileges = function(userId) {
          Restangular.setBaseUrl('index.php/api/v1');
          main.userId = userId;

          var UserPrivileges = Restangular.one('users', userId).all('privileges');

          UserPrivileges.getList().then(function(userPrivilegesJson) {
            main.checkedPrivileges = Restangular.stripRestangular(userPrivilegesJson);
          });
        };

        this.checkboxClick = function($moduleId, $typeId) {
//          var clicked = false;
//
//          for ( var i = 0; i < main.checkedPrivileges.length; i++) {
//            console.log(main.checkedPrivileges[i].types.length);
//            for ( var x = 1; x <= 5; x++) {
//              if ( main.checkedPrivileges[i].id == moduleId && main.checkedPrivileges[i].types[x].id == typeId) {
//                return true;
//              }
//            }
//
//          }
        };

        this.checkPrivilege = function(moduleId, typeId) {

          for ( var i = 0; i < main.checkedPrivileges.length; i++) {
              for ( var x = 1; x <= 5; x++) {
                if ( main.checkedPrivileges[i].id == moduleId && main.checkedPrivileges[i].types[x].id == typeId) {
                  return true;
                }
              }

          }

          return false;
        };

        this.addPrivilege = function(moduleId, typeId) {
//          Restangular.setBaseUrl('index.php/api/v1');
//
//          var UserPrivileges = Restangular.one('users', userId).all('privileges');
//
//          UserPrivileges.getList().then(function(userPrivilegesJson) {
//            console.log(userPrivilegesJson);
//            main.checkedPrivileges = Restangular.stripRestangular(userPrivilegesJson);
//          });
        };

        this.removePrivilege = function(moduleId, typeId) {

          var request = $http({
            method: "delete",
            url: "index.php/api/v1/users/"+main.userId+"/modules/"+moduleId+"/privileges/"+typeId,
            params: {
              action: "delete"
            },
            data: {
            }
          });

          return( request.then( handleSuccess, handleError ) );
        };

        this.checkPrivilege2 = function(moduleId, typeId) {

          var found = false;

          for ( var i = 0; i < main.checkedPrivileges.length; i++) {
            for ( var x = 2; x <= 5; x++) {
              if ( main.checkedPrivileges[i].id == moduleId && main.checkedPrivileges[i].types[x].id == typeId) {
                found = true;
              }
            }

          }

          if (!found) {
            return {'background-color':'#E8E8E8'};
          }

        }
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
          console.log($scope);

        });

        this.click = function(userId) {
          $scope.main.updatePrivileges(userId);
        };
      },
      controllerAs: 'userDD'
    }
  });


})();