(function() {
  var PrivilegeModule = angular.module('privileges', ['restangular', 'ngMaterial']);

  PrivilegeModule.directive('privilegeModule', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/privileges/module-2.html',
      controller: function($scope, Restangular, $http) {

        var main = this;
//        main.parameters = [];
//        main.parameters.push({"name" : "switchOne",
//                              "value" : true});
//        main.parameters.push({"name" : "switchTwo",
//          "value" : true});
//        main.parameters.push({"name" : "switchThree",
//          "value" : true});
//        main.parameters.push({"name" : "switchFour",
//          "value" : true});
//        main.parameters.push({"name" : "switchFive",
//          "value" : true});
//        console.log(main.parameters[0].name);

        $scope.privileges = {};
        $scope.selectedIndex = 0;
        $scope.types = [];
        main.checkedPrivileges = {};
        $scope.availablePrivileges = [];
        main.userId = 0;

        $scope.switchOne = false;
        $scope.switchTwo = false;
        $scope.switchThree = false;
        $scope.switchFour = false;
        $scope.switchFive = false;

        $scope.switches = {
          name: function (newName) {
            if (angular.isDefined(newName)) {
              _name = newName;
            }
            return _name;
          }
        };


        Restangular.setBaseUrl('index.php/api/v1');

        var Privileges = Restangular.all('privileges');

        Privileges.getList().then(function(privilegesJson) {
          $scope.privileges = Restangular.stripRestangular(privilegesJson);

          for ( var i = 0; i < $scope.privileges.length; i++) {
            if(i==0) {
              $scope.privileges[i]['active'] = 'true';
              $scope.types = $scope.privileges[i].types;
            } else {
              $scope.privileges[i]['active'] = 'false';
            }

          }
        });

        $scope.switchBinding = function(type){
          console.log(type);
          if(type.id == 1) {
            return $scope.switchOne;
          }
          if(type.id == 2) {
            return $scope.switchTwo;
          }
          if(type.id == 3) {
            return $scope.switchThree;
          }
          if(type.id == 4) {
            return $scope.switchFour;
          }
          if(type.id == 5) {
            return $scope.switchFive;
          }
        }

        this.onTabSelected = function(tab){
          //$scope.selectedIndex = tab.id;


          typesSize = 0;

          for (var id in tab.types) {
            typesSize++;
          }

          //console.log(tab.types);
          //console.log(typesSize);

          for ( var x = 1; x <= typesSize; x++) {
            //console.log("Module: "+tab.id+" Type: "+tab.types[x].id);
            tab.types[x]['available'] = false;
            for ( var i = 0; i < $scope.availablePrivileges.length; i++) {
              //console.log($scope.availablePrivileges[i]);
              if ( $scope.availablePrivileges[i].module == tab.id && $scope.availablePrivileges[i].privilegeType == id) {
                tab.types[x]['available'] = true;
                break;
              }
            }
          }

          $scope.types = tab.types;
          console.log($scope.types);
        };

        this.updatePrivileges = function(userId) {
          Restangular.setBaseUrl('index.php/api/v1');
          main.userId = userId;

          var UserPrivileges = Restangular.one('users', userId).all('privileges');

          UserPrivileges.getList().then(function(userPrivilegesJson) {
            var strippedJson = Restangular.stripRestangular(userPrivilegesJson);

            $scope.availablePrivileges = [];

            for ( var i = 0; i < strippedJson.length; i++) {
              if ( strippedJson[i].id ) {
                for ( var x = 0; x < strippedJson[i].types.length; x++) {
                  if ( strippedJson[i].id && strippedJson[i].types[x].id ) {
                    var arr = {
                      "module" : strippedJson[i].id,
                      "privilegeType" : strippedJson[i].types[x].id
                    }

                    $scope.availablePrivileges.push(arr);
                  }
                }
              }


            }


          });
        };

        this.addPrivilege = function(moduleId, typeId) {
          $http({
                method: "PUT",
                url: "index.php/api/v1/users/"+main.userId+"/modules/"+moduleId+"/privileges/"+typeId,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: { }
          }).then(function($response) {
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