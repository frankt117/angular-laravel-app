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
      Login.auth(loginCreds).then(function($response) {
        console.log($response.data);

        if ($response.data !== "FALSE") {
          sessionStorage.userId=$scope.email;
          sessionStorage.userCategory=$response.data;
          sessionStorage.loggedIn=true;
          $scope.$parent.$parent.loggedIn = true;


          location.reload();
        } else {
          $scope.alert = true;
        }
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