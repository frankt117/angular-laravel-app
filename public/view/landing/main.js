angular.module( 'app.landing-page', [
    'ui.router'
  ])

  .config(["$stateProvider", function config( $stateProvider ) {
    $stateProvider.state( 'landing-page', {
      url: '/index',
      views: {
        "landing-main": {
          controller: 'LandingPageCtrl',
          templateUrl: 'view/landing/main.html'
        }
      }
    });
  }])

  .controller( 'LandingPageCtrl', ["$scope", function LandingPageCtrl( $scope ) {



  }])

;