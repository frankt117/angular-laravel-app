angular.module( 'app.packages', ['app.packages-service'])

  .directive('packagesList', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/list.html',
      controller: function($scope, PackagesService) {

        this.packages = PackagesService.getPackageList();

      },
      controllerAs: 'packagesListCtrl'
    }
  })

;