angular.module( 'app.manage-customer', [
    'ui.router',
    'app.login'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'customer', {
      url: '/manage/customer',
      views: {
        "main": {
          controller: 'MainCustomerCtrl',
          templateUrl: 'view/manage/customer/main.html'
        },
        "login": {
          controller: 'LoginCtrl',
          templateUrl: 'view/manage/login/main.html'
        }
      }
    });
  })

  .controller( 'MainCustomerCtrl', function MainCustomerCtrl( $scope ) {
    $scope.user.userCategory = 'CUSTOMER';
  })

;