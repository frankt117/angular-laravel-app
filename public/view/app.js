angular.module( 'app', [
    'app.manage-admin',
    'app.manage-service-provider',
    'app.manage-customer',
    'app.new-user',
    'app.landing-page',
    'ui.router',
    'ui.bootstrap',
    'AuthSrvc',
    'app.nav-bar',
    'privileges',
    'app.service-categories',
    'app.markets'
  ])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/index' );

  })

  .run( function run () {
  })

  .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    $scope.loggedIn = sessionStorage.loggedIn;

  })

;