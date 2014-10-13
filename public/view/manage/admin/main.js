angular.module( 'app.manage-admin', [
    'ui.router',
    'app.login'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'admin', {
      url: '/manage/admin',
      views: {
        "main": {
          controller: 'MainAdminCtrl',
          templateUrl: 'view/manage/admin/main.html'
        },
        "login": {
          controller: 'LoginCtrl',
          templateUrl: 'view/manage/login/main.html'
        }
      }
    });
  })

  .controller( 'MainAdminCtrl', function MainAdminCtrl( $scope ) {
    $scope.user.userCategory = 'ADMIN';
  })

;