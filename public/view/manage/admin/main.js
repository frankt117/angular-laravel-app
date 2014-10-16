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

  .controller( 'MainAdminCtrl', function MainAdminCtrl( $scope ) {
//    if(sessionStorage.userCategory) {
//      $scope.userCategory = sessionStorage.userCategory;
//    } else {
//      sessionStorage.userCategory = 'ADMIN';
//      $scope.userCategory = 'ADMIN';
//    }

    sessionStorage.userCategory = 'ADMIN';
  })

;