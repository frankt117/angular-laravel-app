angular.module( 'app', [
    'app.manage-admin',
    'app.manage-service-provider',
    'app.manage-customer',
    'ui.router',
    'ngAnimate',
    'ngMaterial'
  ])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/manage/admin' );

  })

  .run( function run () {
  })

  .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    $scope.userId = '';
    console.log($scope);

  })

;