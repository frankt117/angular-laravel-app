angular.module( 'app.manage-admin', [
    'ui.router',
    'app.login'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'admin', {
      url: '/manage/admin',
      views: {
        "manage-main": {
          controller: 'MainAdminCtrl',
          templateUrl: 'view/manage/admin/main.html'
        },
        "manage-login": {
          controller: 'LoginCtrl',
          templateUrl: 'view/manage/login/main.html'
        }
      }
    });
  })

  .controller( 'MainAdminCtrl', function MainAdminCtrl( $scope, $http ) {

    $http({method:'GET',url:'index.php/api/v1/login/get-logged-in'})
      .success(function(data, header) {
        console.log("AUTH USER :");
        console.log(data);
      })
      .error(function(data, header) {
        console.log("AUTH USER FAIL");
      });

    sessionStorage.newUserCategory = 'company';

    if(sessionStorage.loggedIn == "true" && sessionStorage.userCategory != 'company') {

      switch (sessionStorage.userCategory) {
        case 'company':
          window.location = "#/manage/admin";
          break;
        case "service_provider":
          window.location =  "#/manage/service-provider";
          break;
        case 'customer':
          window.location =  "#/manage/customer";
          break;
        case 'CUSTOMER':
          window.location =  "#/manage/customer";
          break;
        default :
          window.location = "#/index";
      }

    }

    this.currentView = 'Main';

    //sessionStorage.userCategory = 'ADMIN';
  })

;