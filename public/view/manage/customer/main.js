angular.module( 'app.manage-customer', [
    'ui.router',
    'app.login'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'customer', {
      url: '/manage/customer',
      views: {
        "main": {
          controller: 'MainCtrl',
          templateUrl: 'view/manage/customer/main.html'
        },
        "login": {
          controller: 'LoginCtrl',
          templateUrl: 'view/manage/login/main.html'
        }
      }
    });
  })

  .controller( 'MainCtrl', function MainCtrl( $scope ) {
  })

;