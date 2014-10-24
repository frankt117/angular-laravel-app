angular.module( 'app.packages', ['app.packages-service'])

  .directive('packagesList', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/list.html',
      controller: function($scope, PackagesService, CategoriesService) {

        this.packages = PackagesService.getPackageList();

        console.log(this.packages);

        PackagesService.updatePackageList = function(category, market) {
          var categoryObj = CategoriesService.getByCategoryName_Promise(category)
            .success(function(data) {
              PackagesService.getPackagesByCategory(data.id)
                .success(function(data) {
                  console.log(data);
                  $scope.packagesListCtrl.packages = data;
                  PackagesService.setPackageList(data);
                  console.log($scope);

                })
            });
        };

      },
      controllerAs: 'packagesListCtrl'
    }
  })

;