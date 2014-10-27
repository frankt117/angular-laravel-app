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

        this.clicked = function(packageObj) {
          console.log("PACKAGE CLICKED!!!");
          console.log(packageObj);
          PackagesService.packageListClicked(packageObj);
        }

      },
      controllerAs: 'packagesListCtrl'
    }
  })

  .directive('packageCrudAdmin', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/crud-admin.html',
      controller: function($scope, PackagesService, CategoriesService, MarketsService) {

        var _selectedMarket = {};
        var _selectedCategory = {};
        this._currentView = 'MAIN';

        MarketsService.newMarketSelected = function() {
          _selectedMarket = MarketsService.getSelectedMarket();
        };

        CategoriesService.newCategorySelected = function() {
          _selectedCategory = CategoriesService.getSelctedCategory();
          PackagesService.updatePackageList(_selectedCategory);
        };

        PackagesService.packageListClicked = function(packageObj) {
          console.log("IN CRUD CONTROLLER!!!");
        };

        this.getCurrentView = function(view) {
          return this._currentView == view;
        };

        this.setCurrentView = function(view) {
          this._currentView = view;
        };


      },
      controllerAs: 'packageCrudAdminCtrl'
    }
  })

  .directive('crudAdminPackageListTile', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/crud-admin-package-list-tile.html'
    }
  })

  .directive('crudAdminPackageEdit', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/crud-admin-package-edit-tile.html',
      controller: function($scope, PackagesService, CategoriesService, MarketsService) {

      },
      controllerAs: 'crudAdminPackageEdit'
    }
  })

;