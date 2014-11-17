angular.module( 'app.negotiate-page', [
    'ui.router'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'negotiate-page', {
      url: '/negotiate',
      views: {
        "landing-main": {
          controller: 'NegotiatePageCtrl',
          templateUrl: 'view/negotiate/main.html'
        }
      }
    });
  })

  .controller( 'NegotiatePageCtrl', function NegotiatePageCtrl( $scope ) {



  })

;