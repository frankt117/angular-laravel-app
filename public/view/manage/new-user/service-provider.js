angular.module( 'app.new-user-service-provider', [])

  .directive('newUserServiceProviderForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/new-user/service-provider.html',
      controller: function($scope) {

      },
      controllerAs: 'newUserServiceProviderCtrl'
    }
  })
;