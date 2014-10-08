angular.module( 'app.manage-service-provider', [
    'ui.router'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'service-provider', {
      url: '/manage/service-provider',
      views: {
        "main": {
          controller: 'MainCtrl',
          templateUrl: 'view/manage/service-provider/main.html'
        }
      }
    });
  })

  .controller( 'MainCtrl', function MainCtrl( $scope ) {
  })

;