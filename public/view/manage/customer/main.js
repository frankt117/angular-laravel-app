angular.module( 'app.manage-customer', [
    'ui.router',
    'app.login'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'customer', {
      url: '/manage/customer',
      views: {
        "manage-main": {
          controller: 'MainCustomerCtrl',
          templateUrl: 'view/manage/customer/main.html'
        },
        "manage-login": {
          controller: 'LoginCtrl',
          templateUrl: 'view/manage/login/main.html'
        }
      }
    });
  })

  .controller( 'MainCustomerCtrl', function MainCustomerCtrl( $scope ) {
    sessionStorage.newUserCategory = 'customer';

    if(sessionStorage.loggedIn == "true" && (sessionStorage.userCategory != 'customer' || sessionStorage.userCategory != 'CUSTOMER')) {

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