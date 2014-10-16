angular.module( 'app', [
    'app.manage-admin',
    'app.manage-service-provider',
    'app.manage-customer',
    'app.new-user',
    'ui.router',
    'ui.bootstrap',
    'AuthSrvc',
    'app.nav-bar',
    'privileges'
  ])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/manage/customer' );

  })

  .run( function run () {
  })

  .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    $scope.loggedIn = sessionStorage.loggedIn;

  })

;