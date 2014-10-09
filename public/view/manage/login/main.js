angular.module( 'app.login', ['ngAnimate', 'ngMaterial'])


  .controller( 'LoginCtrl', function LoginCtrl( $scope ) {
    $scope.email = '';
    $scope.password = '';

  })

;