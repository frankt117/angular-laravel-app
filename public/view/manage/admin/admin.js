angular.module( 'app.manage-admin', [
    'ui.router'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'admin', {
      url: '/manage/admin',
      views: {
        "main": {
          controller: 'AdminCtrl',
          templateUrl: 'view/manage/admin/admin.html'
        }
      }
    });
  })

  .controller( 'AdminCtrl', function AdminCtrl( $scope ) {
  })

;