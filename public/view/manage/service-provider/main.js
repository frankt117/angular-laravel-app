angular.module( 'app.manage-service-provider', [
    'ui.router',
    'app.login'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'service-provider', {
      url: '/manage/service-provider',
      views: {
        "manage-main": {
          controller: 'MainSPCtrl',
          templateUrl: 'view/manage/service-provider/main.html'
        },
        "manage-login": {
          controller: 'LoginCtrl',
          templateUrl: 'view/manage/login/main.html'
        }
      }
    });
  })

  .controller( 'MainSPCtrl', function MainSPCtrl( $scope ) {
    sessionStorage.newUserCategory = 'service_provider';

    if(sessionStorage.loggedIn == "true" && sessionStorage.userCategory != 'service_provider') {

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
  })

;