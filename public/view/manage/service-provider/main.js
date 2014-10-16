angular.module( 'app.manage-service-provider', [
    'ui.router',
    'app.login'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'service-provider', {
      url: '/manage/service-provider',
      views: {
        "main": {
          controller: 'MainSPCtrl',
          templateUrl: 'view/manage/service-provider/main.html'
        },
        "login": {
          controller: 'LoginCtrl',
          templateUrl: 'view/manage/login/main.html'
        }
      }
    });
  })

  .controller( 'MainSPCtrl', function MainSPCtrl( $scope ) {
//    if(sessionStorage.userCategory) {
//      $scope.userCategory = sessionStorage.userCategory;
//    } else {
//      sessionStorage.userCategory = 'SERVICE';
//      $scope.userCategory = 'SERVICE';
//    }

    sessionStorage.userCategory = 'SERVICE';
  })

;