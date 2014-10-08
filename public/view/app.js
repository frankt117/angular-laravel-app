angular.module( 'app', [
    'app.manage-admin',
    'app.manage-service-provider',
    'ui.router'
  ])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/manage/admin' );

  })

  .run( function run () {
  })

  .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  })

;