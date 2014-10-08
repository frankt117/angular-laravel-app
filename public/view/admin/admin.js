angular.module( 'app.admin', [
    'ui.router'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'admin', {
      url: '/admin',
      views: {
        "main": {
          controller: 'AdminCtrl',
          templateUrl: 'view/admin/admin.html'
        }
      }
    });
  })

  .controller( 'AdminCtrl', function AdminCtrl( $scope ) {
  })

;