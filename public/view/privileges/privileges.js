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
        main.availablePrivileges = [];
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
            var strippedJson = Restangular.stripRestangular(userPrivilegesJson);
            console.log(strippedJson);

            main.availablePrivileges = [];

            for ( var i = 0; i < strippedJson.length; i++) {
              if ( strippedJson[i].id ) {
                for ( var x = 0; x < strippedJson[i].types.length; x++) {
                  if ( strippedJson[i].id && strippedJson[i].types[x].id ) {
                    var arr = {
                      "module" : strippedJson[i].id,
                      "privilegeType" : strippedJson[i].types[x].id
                    }

                    main.availablePrivileges.push(arr);
                  }
                }
              }


            }

            console.log(main.availablePrivileges);

          });
        };

        this.addPrivilege = function(moduleId, typeId) {
          $http({
                method: "PUT",
                url: "index.php/api/v1/users/"+main.userId+"/modules/"+moduleId+"/privileges/"+typeId,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: { }
          }).then(function($response) {
            console.log($response);
            main.updatePrivileges(main.userId);
          });
        };

        this.removePrivilege = function(moduleId, typeId) {

          $http({
            method: "delete",
            url: "index.php/api/v1/users/"+main.userId+"/modules/"+moduleId+"/privileges/"+typeId,
            params: {
              action: "delete"
            },
            data: { }
          }).then(function($response) {
            console.log($response);
            main.updatePrivileges(main.userId);
          });
        };

        this.checkPrivilege2 = function(moduleId, typeId) {

          var found = false;

          for ( var i = 0; i < main.availablePrivileges.length; i++) {
            if ( main.availablePrivileges[i].module == moduleId && main.availablePrivileges[i].privilegeType == typeId) {
              found = true;
            }
          }

          if (!found) {
            return {'background-color':'#CACCCC'};
          }

        };

        this.showPrivileges = function() {
          if(main.availablePrivileges.length) {
            return true;
          } else {
            return false;
          }
        };
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