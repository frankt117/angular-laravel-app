angular.module( 'app', [
    'app.admin',
    'ui.router'
  ])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/admin' );

  })

  .run( function run () {
  })

  .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  })

;