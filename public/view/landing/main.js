angular.module( 'app.landing-page', [
    'ui.router'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'landing-page', {
      url: '/index',
      views: {
        "landing-main": {
          controller: 'LandingPageCtrl',
          templateUrl: 'view/landing/main.html'
        }
      }
    });
  })

  .controller( 'LandingPageCtrl', function LandingPageCtrl( $scope, MarketsService ) {

    MarketsService.newMarketSelected = function() {
      console.log("IN THE LANDING PAGE CTRL WAAZZZUUUUPPP!");
    };
  })

;