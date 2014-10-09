angular.module( 'app.manage-admin', [
    'ui.router',
    'app.login'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'admin', {
      url: '/manage/admin',
      views: {
        "main": {
          controller: 'AdminCtrl',
          templateUrl: 'view/manage/admin/main.html'
        },
        "login": {
          controller: 'LoginCtrl',
          templateUrl: 'view/manage/login/main.html'
        }
      }
    });
  })

  .controller( 'AdminCtrl', function AdminCtrl( $scope ) {
  })

;