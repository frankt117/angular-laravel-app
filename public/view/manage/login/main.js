angular.module( 'app.login', ['app.new-user'])


  .controller( 'LoginCtrl', function LoginCtrl( $scope, $http, Login) {
    $scope.email = '';
    $scope.password = '';
    $scope.panelSelected = 1;
    $scope.showNewUserPanel = true;
    $scope.alert = false;
    $scope.newUserAlert = false;

    $scope.clickTest = function () {
      console.log("CLICKED");
    };

    $scope.submit = function (form, $window) {
      $scope.email = form.target[0].value;
      $scope.password = form.target[1].value;

      console.log($scope.email);

      var userEmail = $scope.email;

      var loginCreds = {'email' : $scope.email, 'password' : $scope.password};
      Login.auth(loginCreds)
        .success(function(data, header) {

          if(data != "FALSE") {
            sessionStorage.userId=$scope.email;
            sessionStorage.userCategory=data;
            sessionStorage.loggedIn=true;
            $scope.$parent.$parent.loggedIn = true;

            switch (sessionStorage.userCategory) {
              case 'company':
                window.location = "#/manage/admin";
                location.reload();
                break;
              case "service_provider":
                window.location =  "#/manage/service-provider";
                location.reload();
                break;
              case 'customer':
                window.location =  "#/manage/customer";
                location.reload();
                break;
              case 'CUSTOMER':
                window.location =  "#/manage/customer";
                location.reload();
                break;
              default :
                window.location = "#/index";
            }
          } else {
            $scope.alert = true;
          }

        })
        .error(function(data, header) {
          $scope.alert = true;
        });


    }

    $scope.isSelected = function isSelected(checkPanel) {
      return $scope.panelSelected === checkPanel;
    }

    $scope.selectPanel = function selectPanel(panel) {
     $scope.panelSelected = panel;
     console.log($scope.panelSelected);
    }

    if ( sessionStorage.userCategory === 'ADMIN') {
      $scope.showNewUserPanel = false;
    }

  })





;